const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  let prefix = botconfig.prefix
  if(!message.content.startsWith(prefix)) return;
  let votechannel = message.guild.channels.find(`name`, "voting");
  let guild = message.guild.id;
  let vUser = message.member;
  if(guild != 419625545404383232 && guild != 503290089003286568) return;
  let vote = args[0];
  let vote1 = "1: " + args[1];
  let vote2 = "2: " + args[2];
  let vote3 = "3: " + args[3];
  let vote4 = "4: " + args[4];
  let vote5 = "5: " + args[5];
  const one = bot.emojis.find(emoji => emoji.name === "one");
  const two = bot.emojis.find(emoji => emoji.name === "two");
  const three = bot.emojis.find(emoji => emoji.name === "three");
  const four = bot.emojis.find(emoji => emoji.name === "four");
  const five = bot.emojis.find(emoji => emoji.name === "five");

  let vote1Embed = new Discord.RichEmbed()
  .setDescription(`**${vote}**`)
  .setColor(hexcode.hex)
  .addField("Vote for:", vote + "!")
  .addField("Votes: ", vote1, vote2)
  .setFooter("Vote started at:" + message.createdAt);
  
  let vote2Embed = new Discord.RichEmbed()
  .setDescription(`**${vote}**`)
  .setColor(hexcode.hex)
  .addField("Vote for:", vote + "!")
  .addField("Votes: ", vote1, vote2)
  .setFooter("Vote started at:" + message.createdAt);
  
  let vote3Embed = new Discord.RichEmbed()
  .setDescription(`**${vote}**`)
  .setColor(hexcode.hex)
  .addField("Vote for:", vote + "!")
  .addField("Votes: ", vote1, vote2)
  .setFooter("Vote started at:" + message.createdAt);
  
  let vote4Embed = new Discord.RichEmbed()
  .setDescription(`**${vote}**`)
  .setColor(hexcode.hex)
  .addField("Vote for: ", vote + "!")
  .addField("Votes: ", vote1, vote2)
  .setFooter("Vote started at: " + message.createdAt);

  if(!vote1) return message.channel.send("Tell me what you want to vote for!");
  if(!vote2) return message.channel.send("This would be a pretty one sided vote wouldn't it?");
  if(!votechannel) return
  message.delete().catch(O_o=>{});
  if(vote1 && vote2 && !vote3 && !vote4 && !vote5) return votechannel.send(vote1Embed)
	.then(function (message) {
			  message.react(`${one}`)
			  message.react(`${two}`)
			});
  if(vote1 && vote2 && vote3 && !vote4 && !vote5) return votechannel.send(vote2Embed)
	.then(function (message) {
			  message.react(`${one}`)
			  message.react(`${two}`)
			  message.react(`${three}`)
			});
  if(vote1 && vote2 && vote4 && !vote5) return votechannel.send(vote3Embed)
	.then(function (message) {
			  message.react(`${one}`)
			  message.react(`${two}`)
			  message.react(`${three}`)
			  message.react(`${four}`)
			});
  if(vote1 && vote2 && vote3 && vote4 && vote5) return votechannel.send(vote4Embed)
	.then(function (message) {
			  message.react(`${one}`)
			  message.react(`${two}`)
			  message.react(`${three}`)
			  message.react(`${four}`)
			  message.react(`${five}`)
			});
};

module.exports.help = {
  name: "vote"
};
