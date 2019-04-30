const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
  
    let aloneembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle("Sorry to see you alone " + message.member.displayName)
    .setURL("http://i.imgur.com/b3SzPZh.gif")
    .setImage(`http://i.imgur.com/b3SzPZh.gif`);
    if(message.member == message.guild.member(message.mentions.users.first())) return message.channel.send(aloneembed);
  
  
    let pUser = message.guild.member(message.mentions.users.first());
    if(!pUser) return message.reply("Mention someone to pat! UwU");
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);
    let patembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${pUser.displayName}` + " you got patted by " + `${message.member.displayName}`)
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);

  
    message.channel.send(patembed);

}

module.exports.help = {
  name: "pat"
}
