const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let user1 = message.member.displayName;
    let user2 = message.guild.member(message.mentions.users.first());
      
      let nekoembed = new Discord.RichEmbed()
      .setColor(hexcode.hex)
      .setTitle("Ship name: "  + "**" +  + "**")
      .setImage();

      message.channel.send(nekoembed);
}

module.exports.help = {
  name: "ship"
}
