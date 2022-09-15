exports.run = async (client, message, args, db) => {
    let array = [];
    const Discord = require('discord.js')
    if (!message.member.permissions.has("MANAGE_GUILD")) {
        return message.channel.send(`Not Today not today.. u need to have permissions \`MANAGE_SERVER\` For That!`);
    }
    if (!args[0]) return message.reply(`Please provide an amount.`)
    if (!args[1]) return message.reply(`Please provide the total number of users.`);
    if (isNaN(args[0])) return message.reply(`Please provide a valid amount.\nEg - \`100\``);
    if (isNaN(args[1])) return message.reply(`Please provide a valid number of users..\nEg - \`5\``);
    let total = parseInt(args[0]);
    let max = parseInt(args[1]);
    if (total < max) return message.reply(`The amount must be greater than total number of users.`)
    let get = Math.round(total / max)
    let embed = new Discord.MessageEmbed()
        .setTitle(`Claim Coins`)
        .setDescription(`You can get ${get.toLocaleString()} coins if you click the button below.`)
    let claim = new Discord.MessageButton()
        .setLabel(`Claim`)
        .setStyle('SUCCESS')
        .setCustomId(`claim`)
    let row = new Discord.MessageActionRow()
        .addComponents(claim)
    let msg = await message.channel.send({ embeds: [embed], components: [row] })
    let col = msg.createMessageComponentCollector({ time: 600000 })
    col.on('collect', async (i) => {
        if (!i.deferred) {
            await i.deferUpdate()
        }
        if (i.customId === 'claim') {
            if(array.length >= max) return i.followUp({content: `Max users have already claimed this.`, ephemeral: true})
            if (array.includes(i.user.id)) return i.followUp({ content: `You have already claimed this.`, ephemeral: true })
            array.push(i.user.id)
            db.add(`coins_${i.user.id}`, get)
        }
    })

}