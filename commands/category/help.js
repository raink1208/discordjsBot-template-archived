const Discord = require("discord.js")

module.exports = {
    name: "help",
    enabled: true,
    description: "全コマンドのhelpを表示します",
    run: (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("全コマンドリスト")
        client.commands.forEach((v,k) => {
            embed.addField(k,v.description)
        });
        message.channel.send(embed)
    }
}