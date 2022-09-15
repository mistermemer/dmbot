exports.run = async(client, message, args, db) => {
let money = await db.fetch(`coins_${message.author.id}`)
message.reply(`You have **${money.toLocaleString()}** $ in your pocket.`)
}