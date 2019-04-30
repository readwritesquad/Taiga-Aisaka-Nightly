const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
  
    let selfslapembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle("You can't hit yourself dummy! " + message.member.displayName)
    .setImage(`https://i.gifer.com/7ZAD.gif`);
    if(message.member == message.guild.member(message.mentions.users.first())) return message.channel.send(selfslapembed);
  
  
    let pUser = message.guild.member(message.mentions.users.first());
    if(!pUser) return message.reply("Mention someone to slap! TwT");
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);
    let slapembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${pUser.displayName}` + " you got slapped by " + `${message.member.displayName}` + ", how rude!")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);

  
    message.channel.send(slapembed);

}

module.exports.help = {
  name: "slap"
}
