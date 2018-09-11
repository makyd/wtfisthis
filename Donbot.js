const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // list of servers
    console.log("Connected as " + client.user.tag)
    console.log("Servers:")
    client.guilds.forEach((guild) =>{
        console.log(" - " + guild.name)

        // list of channels

    guild.channels.forEach((channel) => {
        console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
})
client.user.setActivity("The worlds smallest violine")

})
})

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    
    // Check if the bot's user was tagged in the message
    if (receivedMessage == "Maky" || receivedMessage == "maky"||receivedMessage =="Makyd"||receivedMessage =="makyd") {
        // Send acknowledgement message
        receivedMessage.channel.send("<@184440359659503616>" + " Is a fucking Don")
    }
})

bot_secret_token = "xxxxxxxx"

client.login(bot_secret_token)
