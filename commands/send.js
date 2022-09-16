exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_GUILD")) {
        return message.channel.send(`Not Today not today.. u need to have permissions \`MANAGE_SERVER\` For That!`);
    }
    if(!args[0]) return message.reply(`Please mention a role id.`);
let role = await message.guild.roles.cache.get(args[0]);
if(!role) return message.reply(`You must provide a valid role ID`);
if(!args[1]) return message.reply(`You must provide a message which should be sent.`);
let msg = args.splice(1, args.length);
msg = msg.join(' ');
await role.members.forEach((x) => {

x.send(`Important Message: \n\n\`\`\`\n${msg}\n\`\`\``).catch(() => message.reply(`Can't send DMs to ${x.user.username}`));

})
message.reply(`Sent this message to every user.`)

    
    
    

}
