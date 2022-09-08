exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`You need \`manage_guild\` permissions for that.`)
    let user = message.mentions.members.first()
    if(!user) return message.reply(`Sorry, but you need to mention a user.`)
    let filter = (m) => m.author.id === message.author.id
    message.channel.send(`>>> Please enter the message you would like to send to this user.`)
   
let col = message.channel.createMessageCollector({time: 90000})
col.on('collect', async(i) => {
    if(i.author.id !== message.author.id) return;
    if(i.content < 5){
        i.reply(`Please enter a message between 5 to 200 charecters.`)
        col.stop('err')
        return;
    }
    try {
       await user.send(i.content)
        i.reply(`This message has been sent to ${user}`)
        col.stop('done')
    } catch(e){
        i.reply(`Cant send DMs to this user.`)
    }
})
    col.on('end', async(x, y) => {
        if(y !== 'done') return message.reply(`You did not respond with a proper message, try again later.`)
    })
    

}
