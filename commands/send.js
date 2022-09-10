exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`You need \`manage_guild\` permissions for that.`)
if(!args[0]) return message.reply(`Please mention a role id.`);
let role = await message.guild.roles.cache.get(args[0]);
if(!role) return message.reply(`You must provide a valid role ID`);
if(!args[1]) return message.reply(`You must provide a message which should be sent.`);
let msg = args.splice(1, args.length);
await role.members.forEach((x) => {
    try{
    x.send(`Important Message: \n\n\`\`\`\n${msg}\n\`\`\``)
    }catch(e){
        console.log(e)
    }
})
message.reply(`Sent this message to every user.`)

    await user.send(args.join(' '))
    message.reply(`This message was sent to ${user}`)
    

}
