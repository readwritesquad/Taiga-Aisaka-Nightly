const Discord = require("discord.js");
const ms = require("ms");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) =>{

  ///temppute Ai#6609 1s/m/h/d

  if(!message.content.startsWith(botconfig.prefix)) return;
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have the permission to do this!");
  if(!tomute) return message.reply("No user is specified, baka!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I can't mute a mod or admin!");
  let muterole= message.guild.roles.find('name', "muted");
  //start of create muted role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: hexcode.hex,
        permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create muted role
  let mutetime = args[1];
  if(!mutetime) return message.reply("No time specified, can you do anything right?!")

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}!`);

  let muteEmbed = new Discord.RichEmbed()
  .setDescription("__Muted!__")
  .setColor(hexcode.hex)
  .addField("Muted User", `<@${tomute.id}>`)
  .addField("Muted By", `<@${message.author.id}>`)
  .addField("Muted In", message.channel)
  .addField("Muted At", message.createdAt)

  let muteChannel = message.guild.channels.find(`name`, "kicks-and-bans");
  if(!muteChannel) return message.channel.send("Couldn't find the mute channel! Please create a channel called ``kicks-and-bans``!");

  muteChannel.send(muteEmbed);

  return;

  setTimeout(function(){
    tomute.removeRole(muterole.id)
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
};

module.exports.help = {
  name: "mute"
};
