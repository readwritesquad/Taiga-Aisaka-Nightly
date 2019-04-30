//const Discord = require("discord.js")
//const hexcode = require("./hex-colour.json");

//module.exports.run = async (bot, message, args) => {
  
  //if(!message.content.startsWith("/")) return;
  //if(!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have access to this command!");
  //if(!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("I do not have permission to do this.");
  //let cont = message.content.slice("/").split(" ");
  //let mDelete = cont.slice(1);
  //if(!mDelete) return message.channel.send("Give me the amount of messages to delete!");
  
  //async function purge(){
    //message.delete();
    
    //if (isNaN(args[0])) {
      //message.channel.send("Instead, only give me a number.");
      //return;
    //}
    
    //const fetched = await message.channel.fetchMessages({limit: mDelete[0]});
    
    //message.channel.bulkDelete(fetched)
      //.catch(error => console.log(`Error: ${error}`));
    //};
  
  //message.delete();
  //purge();  
  //message.channel.send("Succesfully pruned " + mDelete + " messages!");
  
//};
module.exports.help = {
  name: "prune"
};