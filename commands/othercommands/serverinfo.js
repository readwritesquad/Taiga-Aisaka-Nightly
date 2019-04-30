const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("__**Server Information**__")
    .setColor(hexcode.hex)
    .setThumbnail(sicon)
    .addField("Guild Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("User Members", "Not working")
    .addField("Bot Members", "Not working")
    .setFooter("©Ai, requested by " + message.member.displayName);

    return message.channel.send(serverembed);
  };

module.exports.help = {
  name: "serverinfo"
};
