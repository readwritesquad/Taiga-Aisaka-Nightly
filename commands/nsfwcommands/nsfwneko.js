const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    if(!message.channel.nsfw) return message.channel.send("this is not a nsfw channel!");
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/lewd`);

    let nekoembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${message.member.displayName}` + " here is your lewd neko~! UwU")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);

    message.channel.send(nekoembed);

}

module.exports.help = {
  name: "lewdneko"
}
