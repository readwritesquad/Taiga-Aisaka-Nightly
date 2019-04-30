const Discord = require("discord.js");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {

    if(!message.content.startsWith(botconfig.prefix)) return;
    let guild = message.guild.id;
    let role = message.guild.roles.find(r => r.name === "Verified");
    let member = message.member;
    if(guild != 508353472110919680) return;

	message.delete().catch(O_o=>{});
    member.addRole(role).catch(console.error);
}


module.exports.help = {
  name: "verify"
}
