const Discord = require('discord.js');
const auth = require("./auth.json");
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
message(client, botID);
