const Discord = require('discord.js');
const auth = require("./auth.json");
const ytdl = require('ytdl-core');
const welcome = require('./welcome');
const message = require('./message');

const client = new Discord.Client();

const botID = '755175219093569617';
var channelID = '';

client.login(auth.token);

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag);
});

welcome(client);
message(client);

async function execute(message){
  const voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send("you're not in a voice channel bih");
  else {
    const channel = message.member.voice.channel.join();
  }
}
