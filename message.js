module.exports = (client) => {
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
  
  const prefix = "!";

  client.on("message", function(message) {
    if(message.author.bot) return;
    if(message.author.id === '59119564276903936'){
      tonyCounter++;
      if(tonyCounter % 28 === 0){
        message.channel.send("heehee im m7 bard who only plays draft pick and loses heehee");
      }
    }
    if(message.content.includes("sick")) message.reply("ay sicko mode bro");
    if(message.content.includes("mina")) message.channel.send(mina[Math.floor(Math.random()*14)]);
    if(message.content.includes("taiwan numbah one")) message.channel.send('https://tenor.com/view/tzuyu-ok-thumbs-up-approved-gif-14473985');
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "wave") {
      message.channel.send('https://tenor.com/view/twice-nayeon-hi-hello-cute-gif-14356695');
    }
    else if(command === "join"){
      execute(message);
    }
    else if(command === "leave"){
      if(message.member.voice.channel){
        const channel = message.member.voice.channel.leave();
      }
    }
    else if(command === "play"){
      execute(message);
      //const queue = message.client.queue;
      const guild = message.guild;
      const serverQueue = queue.get(messsage.guild.id);
      const dispatcher = serverQueue.connection.play(ytdl('https://www.youtube.com/watch?v=vxKBHX9Datw'));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
      serverQueue.textChannel.send("playing");
      return;
    }
  });
}
