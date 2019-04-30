const Discord = require("discord.js");
const hexcode = require("./hex-colour.json");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./commands/admincommands/warnings.json", "utf8"));
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    ///warn @Ai#6609 Reason
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the manage members permission!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("Instead, give me an user to warn.");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They are a mod or admin!");
    let reason = args.join(" ").slice(22);
    if(!reason) return message.reply("Specify a reason you dummy!");

    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./commands/warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warnings")
    .setAuthor(message.author.username)
    .setColor(hexcode.hex)
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number Of Warnings", warns[wUser.id].warns)
    .addField("Reason Of Warn", reason);

    let warnchannel = message.guild.channels.find(`name`, "kicks-and-bans");
    if(!warnchannel) return message.channel.send("Couldn't find the warnings channel! Please create a channel called ``kicks-and-bans``!");

    warnchannel.send(warnEmbed);
    message.reply(`<@${wUser.id}> has been warned succesfully.`)

    if(warns[wUser.id].warns == 3){
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("__Kicked!__")
      .setColor(hexcode.hex)
      .addField("Kicked User", `${wUser}`)
      .addField("Kicked By", `<@${message.author.id}>`)
      .addField("Kicked At", message.createdAt)
      .addField("Reason For Kick", "Having too much warnings");
      message.guild.member(wUser).kick(reason);
      warnchannel.send(kickEmbed);
      message.reply(`<@${wUser.id}> has been kicked from the server!`);
    };
    if(warns[wUser.id].warns == 4){
      message.guild.member(wUser).ban(reason);
      message.reply(`<@${wUser.id}> has been banned from the server!`);
    };
};

module.exports.help = {
  name: "warn"
};
