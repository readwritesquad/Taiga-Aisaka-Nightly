const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    if(!message.channel.nsfw) return message.channel.send("This is not a NSFW channel!");
    let pCum = message.guild.member(message.mentions.users.first());
	let usertocumin = message.member;
	if(!usertocumin) return;

    {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cum`);
    let cumembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(`${message.member.displayName}` + " is cumming!")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);
      
    if(!pCum)message.channel.send(cumembed);
    }
  
	if(pCum){
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cum`);
    let cumembed1 = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle(usertocumin.displayName + " came inside " + `${pCum.displayName}` + "!")
    .setURL(body.url)
    .setImage(body.url)
    .setFooter("©Ai, requested by " + message.member.displayName);
      
    if(pCum)message.channel.send(cumembed1);
    };


}

module.exports.help = {
  name: "cum"
}