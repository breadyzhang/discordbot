module.exports = (client, botID) => {
  const embed = require("./embed.js");
  const ytdl = require('ytdl-core');
  const fetch = require('node-fetch');
  const querystring = require('querystring');
  const auth = require('./auth.json');

  var tonyCounter = 0;
  var counter = 0;
  var mina = ['https://gfycat.com/tamehelplessgalapagossealion',
  'https://gfycat.com/advancedcarefuleyelashpitviper-twice-mina-kpop',
  'https://gfycat.com/slipperyperiodichypsilophodon',
  'https://gfycat.com/dismalwarpedfoxterrier-twice-mina',
  'https://gfycat.com/favorableadolescentacornweevil-twice-mina-kpop',
  'https://gfycat.com/cloudytalkativeafricangoldencat',
  'https://gfycat.com/academiccluelessasianelephant',
  'https://gfycat.com/admiredhilariousflyingfish-twicetiktokofficialjp-mina-cute-kpop-teuwaiseu',
  'https://gfycat.com/miserableeverlastinggrub-reaction-twice-mina-cute-kpop-teuwaiseu-pog',
  'https://gfycat.com/colorlessaptalaskajingle','https://gfycat.com/concreteoptimistickite-twice-mina-kpop',
  'https://gfycat.com/evenidealisticarieltoucan',
  'https://gfycat.com/antiqueacceptableacouchi-mina-twice-mina-mina-twice',
  'https://tenor.com/view/mina-gif-19371587'];

  const prefix = "`";

  client.on("message", async message => {
    var msg = message.content.toLowerCase();
    if(message.author.bot && message.author.id != botID){
      message.react('🇧');
      message.react('🇴');
      message.react('🇹');
      return;
    }
    if(message.author.id === '158649649073356810'){
      tonyCounter++;
      if(tonyCounter % 17 === 0){
        message.channel.send("heehee im m7 bard who only plays draft pick and loses heehee");
      }
    }
    if(msg == "sick") message.reply("ay sicko mode bro");
    if(msg == "mina") message.channel.send(mina[Math.floor(Math.random()*14)]);
    if(msg == "taiwan numbah one") message.channel.send('https://tenor.com/view/tzuyu-ok-thumbs-up-approved-gif-14473985');
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "help"){
      embed(message);
    }
    else if(command === "wave") {
      message.channel.send('https://tenor.com/view/twice-nayeon-hi-hello-cute-gif-14356695');
    }
    else if(command === "spongebob"){
      var str = "";
      var i;
      for(i = 0; i < args.length; i++){
        var j;
        for(j = 0; j < args[i].length; j++){
          if(args[i][j] == 'i' || args[i][j] == 'I'){
            str = str.concat('i');
          }
          else if (args[i][j] == 'l' || args[i][j] == 'L'){
            str = str.concat('L');
          }
          else{
            if(Math.floor(Math.random()*2)){
              str = str.concat(args[i][j].toUpperCase());
            }
            else{
              str = str.concat(args[i][j].toLowerCase());
            }
          }
        }
        str = str.concat(' ');
      }
      message.channel.send(str);
      return;
    }
    else if(command === "coinflip"){
       var result = Math.floor(Math.random()*2)+1;
       if(result == 1){
         message.channel.send("heads");
       }
       else{
         message.channel.send("tails");
       }
    }
    else if(command === "random"){
      message.channel.send("Picking a random number from 1 to " + args[0] + "...\n" + (Math.floor(Math.random()*parseInt(args[0]))+1));
    }
    else if(command === "react"){
      var limit = querystring.stringify({limit: 8});
  		var key = querystring.stringify({key: auth.tenor});
  		var search = querystring.stringify({q : args.join('-')});
  		var url = `https://api.tenor.com/v1/search?${search}&${key}&${limit}`;
  		const {results} = await fetch(url).then(response => response.json());
  		//console.log(results[0].url);
  		message.channel.send(results[Math.floor(Math.random()*8)].url);
    }
    else if(command === "static"){
      message.member.voice.channel.setBitrate(8000);
    }
    else if(command === "revertvoice"){
      message.member.voice.channel.setBitrate(64000);
    }
    else if(command === "scramble"){
      message.author.setNickname("peepeepoopoo");
    }
    else if(command === "join"){
      join(message);
      return;
    }
    else if(command === "leave"){
      if(message.member.voice.channel){
        const channel = message.member.voice.channel.leave();
      }
      return;
    }
    else if(command === "play"){
      join(message);
      const voiceChannel = message.member.voice.channel;
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=vxKBHX9Datw'));
      dispatcher.on('start', () => {
        console.log('now playing');
      });
      dispatcher.on('finish', () => {
        console.log('done');
      });
      return;
    }
  });
}

async function join(message){
  const voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send("you're not in a voice channel bih");
  else {
    const channel = message.member.voice.channel.join();
  }
}
