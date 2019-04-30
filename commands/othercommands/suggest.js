const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(!message.content.startsWith(botconfig.prefix)) return;
  let suggestschannel = message.guild.channels.find(`name`, "suggestions");
  let guild = message.guild.id;
  let sUser = message.member;
  let suggestion = args.join(" ").slice();
  if(!suggestion) return message.channel.send("Give me something to suggest")
  if(guild != 419625545404383232 && guild != 508353472110919680) return;

  let suggestEmbed = new Discord.RichEmbed()
  .setDescription("**Suggest**")
  .setColor(hexcode.hex)
  .addField("User who suggested it:", `${sUser}`)
  .addField("Suggestion:", suggestion)
  .addField("Suggested at:", message.createdAt)
  .setFooter("©Ai, requested by " + sUser.displayName);

  if(!suggestschannel) return
  message.delete().catch(O_o=>{});
  suggestschannel.send(suggestEmbed);

};

module.exports.help = {
  name: "suggest"
};
