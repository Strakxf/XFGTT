const Discord = require('discord.js');

const TOKEN = '{NDgxMDg0NjUwNDQyNDU3MDg5.Dl2uvg.XJEFxgKbUiL00cFMYz5ptrL21aY}';

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
v
    if (message.content == "InfoRollback") {
        message.channel.sendMessage("79% To GO!");
        message.channel.sendMessage("Keep Support Strak!");
        message.channel.sendMessage("Semua system/command/functional bot sedak di perbaiki.");
    }
});

bot.login([process.env.BOT_TOKEN]);
