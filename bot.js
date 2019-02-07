const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log('DONE')
});
client.on('message', message => {
        var prefix = "#";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
client.on('ready', async() => {
var server = "543038727379746818"; 
var channel = "543038727379746820";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Spam , Spam , Spam ,Spam ,Spam ,Spam')
    },305);
})
client.login(process.env.BOT_TOKEN);
