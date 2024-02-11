const discord = require("discord.js")

const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { Prefıx } = require("./config.json")


client.on("ready", () => {
  console.log('Ready TO play some soft songs')
  client.user.setActivity(" 🖤 Maestro Müzik Sorunsuz Hizmet ")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = Prefıx
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(Prefıx)) {
    
    const args = message.content.slice(Prefıx.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("Maestro Bu komutu kullanırken hata alıyorum ")
    }
    
  }
  
  
});

    client.on("ready", () => {
        client.channels.cache.get("813818864344236103").join();   

      }) 


client.login(process.env.Token)
