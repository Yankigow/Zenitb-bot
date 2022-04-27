const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'z!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('ZeZe 2.5 Kick Sistemi Menüsü',`
:warning: **z!kick** : İstediğiniz kişiyi sunucudan atar.
:warning: **z!kicklog-ayarla** : KickLog Kanalini Ayarlarsınız.
:warning: **z!kickyetkilisi-ayarla** : Kick Yetkilisini Ayarlar.
:warning: **z!kicksistem-kapat** : Kick Sistemini Kapatir.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=814787113945399339&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/826147560511111218/826365047252582440/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kick-sistemi'],
  permLevel: 0
};

exports.help = {
  name: "kick-sistemi",
  category: "kick-sistemi",
    description: "Eğlence Komutları Gösterir."
};