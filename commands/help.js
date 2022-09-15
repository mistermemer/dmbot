const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `
   !send\`\` - Send dm to a user using this bot.

   !help\`\` - to see this command.
   `;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + '!' + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Googly Commands Help",
        client.user.avatarURL()
      )
      .setColor("GREEN")
      .setTimestamp()
      .setDescription(revised)
  );
};
