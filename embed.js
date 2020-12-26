module.exports = (message) => {
  const Discord = require('discord.js');
  const info = require('./package.json');
  const embed = new Discord.MessageEmbed()
  embed.setColor('#ffff00');
  embed.setAuthor('Made by: ' + info.author);
  embed.setDescription('Whatchu looking at this for');
  embed.setTitle(info.name);
  embed.setURL('https://www.youtube.com/watch?v=GDYJO-1IhN8');
  embed.setThumbnail('https://i.imgur.com/TNaoJqD.png');
  embed.setFooter('what the quack');
  embed.addFields(
    {name: 'help', value: 'shows this thing'},
    {name: 'wave', value: 'bot waves back'},
    {name: 'spongebob', value: 'cHanGes yOUr meSsAge iNTo thiS'},
    {name: 'coinflip', value: 'does a coinflip and messages the result'},
    {name: 'random', value: 'outputs a random value based on your input'}
  );
  message.channel.send(embed);
}
