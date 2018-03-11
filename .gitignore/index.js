const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&")

bot.on('ready', function() {
    bot.user.setGame("se toucher avec mon Maître");
    console.log("Connected");
});

bot.login("process.env.TOKEN");

bot.on('message', message => {
    if (message.content === prefix + "help")
        message.author.createDM().then(channel => {
            message.channel.sendMessage("Vous avez reçu un message privé :) !")
            channel.send("Liste des commandes : \n -help \n -allo")

        }
    )
})

bot.on('message', message => {
    if (message.content === prefix + "allo")
    message.channel.sendMessage("Je suis là Maître !")
})
