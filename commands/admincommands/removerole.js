const Discord = require("discord.js");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {

  ///removerole @Ai#6609 role name
  if(!message.content.startsWith(botconfig.prefix)) return;
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have the roles permission!")
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("You didn't mention an user, silly you!")
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Instead, give me a role to remove. tsk tsk >.>");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("That role doesn't exist!!!")

  if(rMember.roles.has(gRole.id)) return message.reply("They do not have this role!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`<@${rMember.id}>, you have been deleted of the role ${gRole.name}!`)
    await message.channel.send(`Succesfully removed <@${rMember.id}> of the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Succesfully removed <@${rMember.id}> of the role ${gRole.name}, even though we could not dm him/her.`)
    }
}

module.exports.help = {
  name: "removerole"
}
