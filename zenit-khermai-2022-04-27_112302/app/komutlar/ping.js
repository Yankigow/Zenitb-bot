const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
var db = require("quick.db");

exports.run = function(client, message, embed, params) {
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix 
  const xen = new Discord.RichEmbed()
  .setTitle("Birisi Ping Mi Dedi !")
  .setDescription('Ne')
  .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
  .addField('Pingim ```'+ client.ping +"``` ms!","**Performansım Hasıl Sizce Hız Testim İçin ||" + prefix + "speedtest||**");
    message.channel.send(xen);

};   

   

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p', 'ms'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};