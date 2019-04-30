const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(!message.content.startsWith(botconfig.prefix)) return;
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Couldn't find the user to kick!");
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.channel.send("No reason given you dummy!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the kick permission, baka!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person is a mod or admin, I can't kick them!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("__Kicked!__")
  .setColor(hexcode.hex)
  .addField("Kicked User", `${kUser}`)
  .addField("Kicked By", `<@${message.author.id}>`)
  .addField("Kicked In", message.channel)
  .addField("Kicked At", message.createdAt)
  .addField("Reason For Kick", kReason);

  let kickChannel = message.guild.channels.find(`name`, "kicks-and-bans");
  if(!kickChannel) return message.channel.send("Couldn't find the kicks channel! Please create a channel called ``kicks-and-bans``!");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

  return;
};

module.exports.help = {
  name: "kick"
};
