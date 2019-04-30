const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/gasm`);
    const gasm = bot.emojis.find(emoji => emoji.name === "Gasm");

    let gasmembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle("A-Aaaaahhhh~~")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);

    message.channel.send(gasmembed);

}

module.exports.help = {
  name: "gasm"
}
