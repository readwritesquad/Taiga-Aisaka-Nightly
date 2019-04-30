const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(!message.content.startsWith(botconfig.prefix)) return;
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Couldn't find the user to ban!");
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.channel.send("No reason given you dummy!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the ban permission, baka!");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person is a mod or admin, I can't ban them!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("__Banned!__")
  .setColor(hexcode.hex)
  .addField("Banned User", `${bUser}`)
  .addField("Banned By", `<@${message.author.id}>`)
  .addField("Banned In", message.channel)
  .addField("Banned At", message.createdAt)
  .addField("Reason For Ban", bReason);

  let banChannel = message.guild.channels.find(`name`, "kicks-and-bans");
  if(!banChannel) return message.channel.send("Couldn't find the kicks channel! Please create a channel called ``kicks-and-bans``!");

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);

  return;
};

module.exports.help = {
  name: "ban"
};
