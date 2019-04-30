const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    //if(message.author.id != 373359641351946241) return;
    let pEmbed = new Discord.RichEmbed()
    .setTitle("Pong 🏓")
    .setColor(hexcode.hex)
    .addField("Your ping is:", bot.ping + "ms")
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("Requested by: " + message.member.displayName);
  
    message.channel.send(pEmbed);

}

module.exports.help = {
  name: "ping"
}
