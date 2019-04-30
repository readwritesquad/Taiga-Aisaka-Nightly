const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(!message.content.startsWith(botconfig.prefix)) return;
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find this user!")
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send("No reason specified!")

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("__Reported!__")
  .setColor(hexcode.hex)
  .addField("Reported User Is:", `${rUser}`)
  .addField("Reported By", `${message.author}`)
  .addField("Reported In:", message.channel)
  .addField("Reported At:", message.createdAt)
  .addField("Reason of report:", reason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Couldn't find the reports channel! Please create a channel called ``reports``!");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

};

module.exports.help = {
  name: "report"
};
