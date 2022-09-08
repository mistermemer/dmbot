exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`You need \`manage_guild\` permissions for that.`)
    let user = message.mentions.members.first()
    if(!user) return message.reply(`Sorry, but you need to mention a user.`)

    message.channel.send(`>>> Please enter the message you would like to send to this user.`)
   
let col = await message.channel.createMessageCollector({time: 90000})
col.on('collect', async(i) => {
    if(i.author.id !== message.author.id) return;
    if(i.content < 5){
        i.reply(`Please enter a message between 5 to 200 charecters.`)
        col.stop('err')
        return;
    }
    
       await user.send(i.content)
        i.reply(`This message has been sent to ${user}`)
        col.stop('done')
   
})
    col.on('end', async(x, y) => {
        if(y !== 'done') return message.reply(`You did not respond with a proper message, try again later.`)
    })
    

}
