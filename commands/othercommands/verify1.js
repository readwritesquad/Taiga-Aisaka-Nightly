const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
	if(!message.content.startsWith(botconfig.prefix)) return;
	let guild = message.guild.id;
    let verifyembed = new Discord.RichEmbed()
		.setDescription("__**Welcome to the server!**__")
		.setColor(hexcode.hex)
		.addField("What is this?", "This is a in between place that helps prevent anyone from spamming in the main channel with selfbots.")
		.addField("How do I get to talk in other channels?", "Simple! Just do ``/verify`` and you will see it all for yourself!")
		.setFooter("©Ai");
  
	message.delete().catch(O_o=>{});
	if(guild == 508353472110919680) return message.channel.send(verifyembed);
	if(guild != 508353472110919680) return;
  };

module.exports.help = {
  name: "verify1"
};