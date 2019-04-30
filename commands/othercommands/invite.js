const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`${message.member.displayName}` + " here is your invite!")
    .setDescription("Invite link!")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("This bot was open source at and will not be updated here anymore:", "https://github.com/AiThePotato/Taiga-Aisaka")
    .addField("Invite link:", "https://discordapp.com/oauth2/authorize?client_id=494909205954691073&scope=bot&permissions=1073081414")
    .addField("Support server invite:", "https://discord.gg/HDyKth5")
    .setFooter("©Ai, requested by " + message.member.displayName);

    return message.channel.send(botembed);
  };

module.exports.help = {
  name: "invite"
};
