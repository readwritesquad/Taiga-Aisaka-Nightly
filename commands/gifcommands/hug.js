const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let hUser = message.guild.member(message.mentions.users.first());
    if(!hUser) return message.reply("Mention someone to hug! OwO");
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${hUser.displayName}` + " you got hugged by " + `${message.member.displayName}`)
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("Powered by nekos.life! requested by " + message.member.displayName);

    message.channel.send(hugembed);

}

module.exports.help = {
  name: "hug"
}
