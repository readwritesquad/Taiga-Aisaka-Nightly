const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

    let nekoembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${message.member.displayName}` + " here is your neko~!")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);

    message.channel.send(nekoembed);

}

module.exports.help = {
  name: "neko"
}
