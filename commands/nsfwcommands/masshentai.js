const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    if(!message.channel.nsfw) return message.channel.send("This is not a NSFW channel!");

    {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);


    let hembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setImage(body.url)
    .setFooter("Powered by nekos.life!");
      
    message.channel.send(hembed);
    };
  
    {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);
 
    let hembed1 = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setImage(body.url)
    .setFooter("Powered by nekos.life!");
      
    message.channel.send(hembed1);
    };
  
  
    {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);
    let hembed2 = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setImage(body.url)
    .setFooter("Powered by nekos.life!");
      
    message.channel.send(hembed2);
    };
  
    {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);
    let hembed3 = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setImage(body.url)
    .setFooter("Powered by nekos.life!");
      
    message.channel.send(hembed3);
    };

    {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);
    let hembed4 = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setImage(body.url)
    .setFooter("Powered by nekos.life!");
      
    message.channel.send(hembed4);
    };
  
}

module.exports.help = {
  name: "masshentai"
}


