const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let kickyetkilirol = message.mentions.roles.first()
  if (!kickyetkilirol) return message.channel.send('Lütfen yetkili rolünü etiketlermisin?')
   
  db.set(`kickyetkilisi_${message.guild.id}`, kickyetkilirol.id)
  message.channel.send(`Yetkili Rolü Başarıyla Ayarlandı; **${kickyetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kickyetkilisi-ayarla'],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kickyetkilisi-ayarla',
 description: 'Kick Yetkili Rolunu Ayarlar',
 usage: 'kick-yekili-rol <@rol>'
};