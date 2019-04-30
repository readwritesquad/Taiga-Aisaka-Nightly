const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const hexcode = require("./hex-colour.json");
let warns = JSON.parse(fs.readFileSync("./commands/admincommands/warnings.json", "utf8"));
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(!message.content.startsWith(botconfig.prefix)) return;
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Instead, give me an user to check.");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`)

}

module.exports.help = {
  name: "warnings"
}
