const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    funcl: function (){
    client.on('message'), (receivedMessage) => {
        // Prevent bot from responding to its own messages
        if (receivedMessage.author == client.user) {
            return
        }
        
        // Check if the bot's user was tagged in the message
        if (receivedMessage == "test") {
            // Send acknowledgement message
            receivedMessage.channel.send("<@184440359659503616>" + " Is a fucking Don")
        }
    }
}
};
