const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let kUser = message.guild.member(message.mentions.users.first());
    if(!kUser) return message.reply("Mention someone to kiss >3<");
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let kissembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${kUser.displayName}` + " you got kissed by " + `${message.member.displayName}`)
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("Powered by nekos.life! requested by " + message.member.displayName);

    message.channel.send(kissembed);

}

module.exports.help = {
  name: "kiss"
}
