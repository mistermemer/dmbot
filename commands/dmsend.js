exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`You need \`manage_guild\` permissions for that.`)
    let user = message.mentions.members.first()
    if(!user) return message.reply(`Sorry, but you need to mention a user.`)
if(args.length < 1) return message.reply(`Please mention a message which should be sent`);
    let msg = args.splice(0, 1)
    msg = msg.join(' ')
    await user.send(msg)
    message.reply(`This message was sent to ${user}`)
    

}
