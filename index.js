const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const newUsers = new Discord.Collection();
const hexcode = require("./hex-colour.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

global.servers = {};

fs.readdir("./commands/funcommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/funcommands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/admincommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/admincommands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/othercommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/othercommands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/gifcommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/gifcommands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/nsfwcommands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/nsfwcommands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("in " + bot.guilds.size + " servers!", {type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "/";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let hit = 'hit or miss'.toUpperCase();
  let you = 'you got a boyfriend'.toUpperCase();
  let muah = "he gon' find another girl".toUpperCase();
  let he = "he gon' skrrt and hit the dab".toUpperCase();

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);
  
  if(String(message).toUpperCase() == hit) return message.channel.send("I guess they never miss, huh?");
  if(String(message).toUpperCase() == you) return message.channel.send("I bet he doesn't kiss ya (Mwah!)")
  if(String(message).toUpperCase() == muah) return message.channel.send("and he won't miss ya");
  if(String(message).toUpperCase() == he) return message.channel.send("like Wiz Khalifa");
  if(message == "gay") return message.channel.send("I am gay yes.");
  if(message == "Gay") return message.channel.send("I am gay yes.");
  if(message == "gAy") return message.channel.send("I am gay yes.");
  if(message == "gaY") return message.channel.send("I am gay yes.");
  if(message == "gAY") return message.channel.send("I am gay yes.");
  if(message == "GAy") return message.channel.send("I am gay yes.");
  if(message == "GaY") return message.channel.send("I am gay yes.");
  if(message == "GAY") return message.channel.send("I am gay yes.");
  
  let verifyembed = new Discord.RichEmbed()
    .setDescription("__**Welcome to the server!**__")
    .setColor(hexcode.hex)
    .addField("What is this?", "This is a in between place that helps prevent anyone from spamming in the main channel with selfbots.")
	.addField("How do I get to talk in other channels?", "Simple! Just do ``/verify`` and you will see it all for yourself!")
    .setFooter("©Ai");
  
  if(message == "verify" && guild == 508353472110919680) return message.channel.send(verifyembed);
  if(message == "verify" && guild != 508353472110919680) return;
});


bot.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);
 
  if (newUsers.size = 1) {
    const userlist = newUsers.map(u => u.toString()).join(" ");
    let welcomeembed= new Discord.RichEmbed()
    .setColor(hexcode.hex)
    .setTitle("Welcome " + member.user.username)
    .setImage("https://i.imgur.com/KZjiTwF.gif");
    
    let welcomechannel = guild.channels.find(`name`, "general");
    
    if(welcomechannel) return welcomechannel.send(welcomeembed);
	else return;
    newUsers.clear();
  }
});

bot.login(tokenfile.token);
