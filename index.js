const { Client, RichEmbed } = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const client = new Client();
client.login("your discord token");
const channelid = "channel id (where you want to send messages)";
const yourid = "your dicord id here"

function daily(interval) {
  setInterval(() => {
    client.channels.get(channelid).send('pls daily');
}, interval);
}

function beg(interval) {
  setInterval(() => {
    client.channels.get(channelid).send('pls beg');
}, interval);
}

function search(interval) {
  setInterval(() => {
    client.channels.get(channelid).send('pls search');
}, interval);
}

client.on('ready', ()=>{
daily(1000 * 60 * 60 * 24)
beg(1000 * 48)
search(1000 * 33)
});

client.on("message", async message => {
if(message.author.id === "270904126974590976")
{
console.log(message.content)
if(message.content.includes(yourid))
{
  if(message.content.includes("search?")) //pls search command has been used
  {
    if(message.content.includes("christmas tree")) return message.channel.send("christmas tree")
    if(message.content.includes("santa claus")) return message.channel.send("santa claus")
    if(message.content.includes("mistletoe")) return message.channel.send("mistletoe")
    if(message.content.includes("krampus")) return message.channel.send("krampus")
    if(message.content.includes("north pole")) return message.channel.send("north pole")
    if(message.content.includes("advent calendar")) return message.channel.send("advent calendar")
  }
}
}
})
