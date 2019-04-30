const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let uIcon = message.author;
    let mention = message.guild.member(message.mentions.users.first());
    let mIcon = message.mentions.users.first();
    

    let avatarembed1 = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(message.member.displayName)
    .setURL(uIcon.avatarURL)
    .setImage(message.author.avatarURL)
    .setFooter("©Ai, requested by " + message.member.displayName);
    if(!mention) return message.channel.send(avatarembed1);
  
    let avatarembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(mention.displayName)
    .setURL(mIcon.avatarURL)
    .setImage(mIcon.avatarURL)
    .setFooter("©Ai, requested by " + message.member.displayName);
    if(mention) return message.channel.send(avatarembed);
}

module.exports.help = {
  name: "avatar"
}
