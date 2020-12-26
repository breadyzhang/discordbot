module.exports = (message, command) => {
  const ytdl = require('ytdl-core');
  if(command === "join"){
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
    //const voiceChannel = message.member.voice.channel;
    const connection = message.member.voice.channel.join();
    const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=vxKBHX9Datw'));
    dispatcher.on('start', () => {
      console.log('now playing');
    });
    dispatcher.on('finish', () => {
      console.log('done');
    });
  }
}

async function join(message){
  const voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send("you're not in a voice channel bih");
  else {
    const channel = message.member.voice.channel.join();
  }
}
