const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    if(!message.channel.nsfw) return message.channel.send("This is not a NSFW channel!");

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);

    let hgembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${message.member.displayName}` + " here's your gif c:")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);

    message.channel.send(hgembed);

}

module.exports.help = {
  name: "hentaigif"
}
