const Discord = require("discord.js")
const hexcode = require("./hex-colour.json");

module.exports.run = async (bot, message, args) => {
  
    if(!message.content.startsWith("/")) return;
    let command = message.content.includes("hug");
    let command1 = message.content.includes("prune");
    let command2 = message.content.includes("pat");
    let command3 = message.content.includes("kiss");
    let command4 = message.content.includes("say");
    let command5 = message.content.includes("sayembed");
    let command6 = message.content.includes("serverinfo");
    let command7 = message.content.includes("invite");
    let command8 = message.content.includes("trap");
    let command9 = message.content.includes("nsfwnekogif");
    let command10 = message.content.includes("nsfwneko");
    let command11 = message.content.includes("masshentai");
    let command12 = message.content.includes("hentai");
    let command13 = message.content.includes("hentaigif");
    let command14 = message.content.includes("futa");
    let command15 = message.content.includes("cum");
    let command16 = message.content.includes("slap");
    let command17 = message.content.includes("neko");
    let command18 = message.content.includes("gasm");
    let command19 = message.content.includes("dog");
    let command20 = message.content.includes("cat");
    let command21 = message.content.includes("warnings");
    let command22 = message.content.includes("warn");
    let command23 = message.content.includes("report");
    let command24 = message.content.includes("removerole");
    let command25 = message.content.includes("mute");
    let command26 = message.content.includes("kick");
    let command27 = message.content.includes("ban");
    let command29 = message.content.includes("avatar");
    let bicon = bot.user.displayAvatarURL;
    let guild = message.guild.id;
  
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot commands")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("NSFW Commands:", "cum, futa, lewdneko, lewdnekogif, hentaigif, hentai, masshentai, trap")
    .addField("Fun Commands:", "cat, dog, gasm, neko")
    .addField("Gif Commands:", "hug, pat, slap, kiss")
    .addField("Administration Commands:", "ban, mute, removerole, report, warn, warnings")
    .addField("Other Commands:", "help, invite, serverinfo, say, sayembed, avatar")
    .addField("To See Detailed Info:", "``/help [command name]``")
    .addField("Created On", bot.user.createdAt)
    .setFooter("©Ai, requested by " + message.member.displayName);
  
    if(guild != 508353472110919680 && !command && !command1 && !command2 && !command3 && !command4 && !command5 && !command6 && !command7 && !command8 && !command9 && !command10 && !command11 && !command12 && !command13 && !command14 && !command15 && !command16 && !command17 && !command18 && !command19 && !command20 && !command21 && !command22 && !command23 && !command24 && !command25 && !command26 && !command27 && !command29) return message.channel.send(botembed);

    let suppembed = new Discord.RichEmbed()
    .setDescription("Bot commands")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("NSFW Commands:", "cum, futa, lewdneko, lewdnekogif, hentaigif, hentai, masshentai, trap")
    .addField("Fun Commands:", "cat, dog, gasm, neko")
    .addField("Gif Commands:", "hug, pat, slap, kiss")
    .addField("Administration Commands:", "ban, mute, removerole, report, warn, warnings")
    .addField("Other Commands:", "help, invite, serverinfo, say, sayembed, avatar")
    .addField("To See Detailed Info:", "``/help [command name]``")
    .addField("Support server commands", "verify, suggest")
    .addField("Created On", bot.user.createdAt)
    .setFooter("©Ai, requested by " + message.member.displayName);
  
    if(guild = 508353472110919680 && !command && !command1 && !command2 && !command3 && !command4 && !command5 && !command6 && !command7 && !command8 && !command9 && !command10 && !command11 && !command12 && !command13 && !command14 && !command15 && !command16 && !command17 && !command18 && !command19 && !command20 && !command21 && !command22 && !command23 && !command24 && !command25 && !command26 && !command27 && !command29) return message.channel.send(suppembed);

  
    let hugembed = new Discord.RichEmbed()
    .setDescription("**Hug Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you hug the loveable people in your life!")
    .addField("Command Usage", "``/hug Ai#6609``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command) message.channel.send(hugembed);
  
    let pruneembed = new Discord.RichEmbed()
    .setDescription("**Prune Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command is still WIP")
    .addField("Command Usage", "``/prune 1``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command1) message.channel.send(pruneembed);

    let patembed = new Discord.RichEmbed()
    .setDescription("**Pat Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you pat your best friendos!")
    .addField("Why would I want to do this?", "WhY wOuLd I wAnT tO dO tHiS?")
    .addField("Command Usage", "``/pat Ai#6609``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command2) message.channel.send(patembed);
  
    let kissembed = new Discord.RichEmbed()
    .setDescription("**Kiss Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you kiss your loved one!")
    .addField("Why would I want to do this?", "Because you love them a lot <3")
    .addField("Command Usage", "``/kiss Ai#6609``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command3) message.channel.send(kissembed);
  
    let sayembed = new Discord.RichEmbed()
    .setDescription("**Say Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command makes me say anything!")
    .addField("Command Usage", "``/say Ai is gay``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command4) message.channel.send(sayembed);
  
    let sayeembed = new Discord.RichEmbed()
    .setDescription("**SayEmbed Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command makes me say fancy text!")
    .addField("Command Usage", "``/say Ai is ultra gay``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command5) message.channel.send(sayeembed);
  
    let servembed = new Discord.RichEmbed()
    .setDescription("**ServerInfo Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command gives you information about the server!")
    .addField("Command Usage", "``/serverinfo``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command6) message.channel.send(servembed);
  
    let invembed = new Discord.RichEmbed()
    .setDescription("**Invite Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This gives you my invite link!")
    .addField("Why would I want to do this?", "WhY wOuLd I wAnT tO dO tHiS?")
    .addField("Command Usage", "``/invite``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command7) message.channel.send(invembed);
  
    let trapembed = new Discord.RichEmbed()
    .setDescription("**Trap Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends you a hot trap owo")
    .addField("Command Usage", "``/trap``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command8) message.channel.send(patembed);
  
    let nsfwngembed = new Discord.RichEmbed()
    .setDescription("**NSFW Neko GIF Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends a very lewd neko gif uwu")
    .addField("Command Usage", "``/lewdnekogif``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command9) message.channel.send(nsfwngembed);
  
    let nsfwnembed = new Discord.RichEmbed()
    .setDescription("**NSFW Neko Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends a very lewd neko!")
    .addField("Command Usage", "``/lewdneko``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command10) message.channel.send(nsfwnembed);
  
    let masshembed = new Discord.RichEmbed()
    .setDescription("**MassHentai Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends so much hentai~")
    .addField("Command Usage", "``/masshentai``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command11) message.channel.send(masshembed);
  
    let hentaiembed = new Discord.RichEmbed()
    .setDescription("**Hentai Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends some nice hentai your way.")
    .addField("Command Usage", "``/hentai``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command12) message.channel.send(hentaiembed);
  
    let hentaigembed = new Discord.RichEmbed()
    .setDescription("**HentaiGif Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends some animated hentai.")
    .addField("Command Usage", "``/hentaigif``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command13) message.channel.send(hentaigembed);
  
    let futaembed = new Discord.RichEmbed()
    .setDescription("**Futa Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends some hot futa.")
    .addField("Command Usage", "``/futa``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command14) message.channel.send(futaembed);
  
    let cumembed = new Discord.RichEmbed()
    .setDescription("**Cum Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you cum or cum inside someone!")
    .addField("Command Usage", "``/cum``")
    .addField("Alternative usage", "/cum Ai#6609")
    .setFooter("©Ai, command powered by nekos.life");

    if(command15) message.channel.send(cumembed);
  
    let slapembed = new Discord.RichEmbed()
    .setDescription("**Slap Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you slap some bad people!")
    .addField("Command Usage", "``/slap Ai#6609``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command16) message.channel.send(slapembed);
  
    let nekoembed = new Discord.RichEmbed()
    .setDescription("**Neko Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "Sends a nice neko nya~")
    .addField("Command Usage", "``/neko``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command17) message.channel.send(nekoembed);
  
    let gasmembed = new Discord.RichEmbed()
    .setDescription("**Gasm Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "Sends a gasm image you can use as emote!")
    .addField("Command Usage", "``/gasm``")
    .setFooter("©Ai, command powered by nekos.life");

    if(command18) message.channel.send(gasmembed);
  
    let dogembed = new Discord.RichEmbed()
    .setDescription("**Dog Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends a good boye~!")
    .addField("Command Usage", "``/dog``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command19) message.channel.send(dogembed);
  
    let catembed = new Discord.RichEmbed()
    .setDescription("**Cat Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command sends a 3d neko~")
    .addField("Command Usage", "``/cat``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command20) message.channel.send(catembed);
  
    let warnsembed = new Discord.RichEmbed()
    .setDescription("**Warnings Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you see the warnings of a specific user!")
    .addField("Command Usage", "``/warnings Ai#6609``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command21) message.channel.send(warnsembed);
  
    let warnembed = new Discord.RichEmbed()
    .setDescription("**Warn Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command warns a bad boye TwT")
    .addField("Command Usage", "``/warn Ai#6609``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command22) message.channel.send(warnembed);
  
    let repembed = new Discord.RichEmbed()
    .setDescription("**Report Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you report those badies!")
    .addField("Command Usage", "``/pat Ai#6609``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command23) message.channel.send(repembed);
  
    let remembed = new Discord.RichEmbed()
    .setDescription("**Remove Role Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "Removes a role from an user")
    .addField("Command Usage", "``/remevorole Ai#6609 admin``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command24) message.channel.send(remembed);
  
    let muteembed = new Discord.RichEmbed()
    .setDescription("**Mute Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command mutes someone!")
    .addField("Command Usage", "``/mute Ai#6609 10``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command25) message.channel.send(muteembed);
  
    let kickembed = new Discord.RichEmbed()
    .setDescription("**Kick Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command kicks someone from the server.")
    .addField("Command Usage", "``/kick Ai#6609 uwu``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command26) message.channel.send(kickembed);
  
    let banembed = new Discord.RichEmbed()
    .setDescription("**Ban Command**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command lets you ban the meanies!")
    .addField("Command Usage", "``/ban Ai#6609 being bad``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command27) message.channel.send(banembed);
  
    let avatarembed = new Discord.RichEmbed()
    .setDescription("**AvatarCommand**")
    .setColor(hexcode.hex)
    .setThumbnail(bicon)
    .addField("What it does", "This command shows your current avatar of someone's current avatar")
    .addField("Command Usage", "``/avatar or /avatar Ai#6609``")
    .setFooter("©Ai, requested by " + message.member.displayName);

    if(command29) message.channel.send(avatarembed);
  };

module.exports.help = {
  name: "help"
};
