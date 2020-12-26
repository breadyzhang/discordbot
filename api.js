const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

const client = new Client();
const prefix = '!';
const auth = require('./auth.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if(command === "cat"){
    const{file} = await fetch("https://aws.random.cat/meow").then(response => response.json());
    message.channel.send(file);
  }
  if(command === "urban"){
    if(!args.length){
      return message.channel.send("i got nothin'");
    }
    const query = querystring.stringify({term: args.join(' ') });
    const{list} = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
		console.log(list);
    return message.channel.send(list[0].definition);
  }
	if(command === "tenor"){
		var limit = querystring.stringify({limit: 8});
		var key = querystring.stringify({key: 'F6NXXG7EVHVO'});
		var search = querystring.stringify({q : args.join('-')});
		var url = `https://api.tenor.com/v1/search?${search}&${key}&${limit}`;
		const {results} = await fetch(url).then(response => response.json());
		//console.log(results[0].url);
		message.channel.send(results[0].url);
	}
	// ...
});

client.login(auth.token);
