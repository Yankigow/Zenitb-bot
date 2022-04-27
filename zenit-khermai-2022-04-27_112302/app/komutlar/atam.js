const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setDescription('🌹 **Atam Sen Çok Yaşa.**')
    .setColor(3447003)
        .setImage(`https://tenor.com/view/smoke-atat%C3%BCrk-smoke-atat%C3%BCrk-francisco-808dm-gif-25488626`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ataturk'],
  permLevel: 0
};

exports.help = {
  name: 'atam',
  description: '',
  usage: 'atam'
};