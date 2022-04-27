const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("GOLD")
    .addField("» **Botun Sahibi**", "<@IDNIZ>")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](DESTEK SUNUCUSU LINKI)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](DAVET-LINKI", )
    .setImage("https://cdn.discordapp.com/attachments/826147560511111218/826365047252582440/standard.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};