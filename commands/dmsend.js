exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`You need \`manage_guild\` permissions for that.`)
    let user = message.mentions.members.first()
    if(!user) return message.reply(`Sorry, but you need to mention a user.`)
    await message.channel.send(`>>> Please enter the message you would like to send to this user.`)
    await message.channel.awaitMessages({
        filter,
        max: 1,
        time: 90000
    }).then(collected => {
        if(collected.content.length < 5) return message.channel.send(`Message content must be over 5 charecters.`);
        try {
            user.send(`${collected.content}`)
        } catch(e) {
            message.reply(`User cannot be dmed, so sad xd`)
        }

    }).catch(() => {
        message.reply('No answer after 90 seconds, please try the command again.');
        status = 1
    })

}