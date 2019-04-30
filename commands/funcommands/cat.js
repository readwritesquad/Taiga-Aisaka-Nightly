const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let {body} = await superagent
    .get(`http:\/\/aws.random.cat\/meow`);

    let catembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${message.member.displayName}` + " here is your cat")
    .setURL(body.file)
    .setImage(body.file)
    .setFooter("©Ai, requested by " + message.member.displayName);

    message.channel.send(catembed);

}

module.exports.help = {
  name: "cat"
}
