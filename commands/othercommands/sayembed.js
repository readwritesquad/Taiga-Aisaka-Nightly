const Discord = require("discord.js");
const superagent = require("superagent");
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith(botconfig.prefix)) return;
    let pMessage = args.join(" ");
    if(!pMessage) return message.channel.send("Give me something to say!");
    if(message.author.id != 373359641351946241) return;
  
    message.delete().catch(O_o=>{});
    let sayembed = new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setDescription(pMessage);
  
    message.channel.send(sayembed);

}

module.exports.help = {
  name: "sayembed"
}
