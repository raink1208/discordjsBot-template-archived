module.exports = {
    name: "commandName",
    aliases: ["cmdName","cmdN"],
    enabled: true,
    run: (client, message, args) => {
        message.channel.send("ExampleCommand")
    }
}
