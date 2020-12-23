module.exports = (client, channelID) => {
  client.on('guildMemberAdd', (member) => {
      console.log("joined");
      console.log(channelID);
    })
}
