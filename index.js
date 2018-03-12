const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&")

bot.on('ready', function() {
    bot.user.setGame("se toucher avec mon Maître");
    console.log("Connected");
});

bot.login("NDIyMzYzNzMwOTMyNzkzMzQ0.DYas2A.DWgMeJ5BINdAe4TPG8krDN9j2iE");

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

bot.on('message', message => {
    if (message.content === prefix + "botinfo") {
        let bicon = bot.user.displayAvatarURL
        var embed = new Discord.RichEmbed()
            .setTitle("*Shinoa*")
            .setDescription("Shinoa, jeune admiratrice du magnifique Autakou.")
            .addField("&help","Faites &help pour avoir la liste des commandes ^^ !", true)
            .setColor("0x9A2EFE")
            .setThumbnail(bicon)
            .setFooter("Effectivement")
        message.channel.sendEmbed(embed);
    }
});

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "Mes enfants");
        if(!message.member.roles.has(modRole)) {
            return message.reply("as-tu vraiment cru que tu avais la permission d'éxécuter cette commande misérable insecte ? Pff").catch(console.error)
        }
        if(message.mentions.users.size === 0) {
            return message.reply("mentionne l'utilisateur à expulser, BAKA !").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("soit j'arrive pas à trouver l'utilisateur, soit il m'est impossible de l'expulser :/.")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBER")) {
            return message.reply("j'ai pas la permission :c !").catch(console.error)
        }
        kickMember.kick().then(member => {
            message.reply('${member.user.username} a été expuslé avec succès :p !').catch(console.error);
            message.guild.channels.find("name", "generalement").send('**${member.user.username} a été expulsé du discord par **${message.author.username**')
        }).catch(console.error)
    }

    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "Mes enfants");
        if(!message.member.roles.has(modRole)) {
            return message.reply("as-tu vraiment cru que tu avais la permission d'éxécuter cette commande misérable insecte ? Pff").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Mentionne l'utilisateur à bannir, BAKA !");
        member.ban().then(member => {
            message.reply('${member.user.username} a été banni(e) avec succès :p !').catch(console.error);
            message.guild.channel.find("name", "generalement").send('**${member.user.username}** a été banni(e) du discord pat **${message.author.username}**');
        }).catch(console.error)
}})

        
            