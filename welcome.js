module.exports = (client, channelID) => {
  client.on('guildMemberAdd', (member) => {
      const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome');
      if(channel)
        channel.send("welcome to the cringe hole");
      else {
        console.log("cannot find channel name");
      }
  });
}
