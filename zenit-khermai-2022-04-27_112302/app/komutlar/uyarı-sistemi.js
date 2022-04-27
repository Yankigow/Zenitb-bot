const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'z!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('ZeZe 2.5 Uyarı Sistemi Menüsü',`
:name_badge: **z!uyar** : Etiketlediğin Kişiyi Uyarı Atarsınız.
:name_badge: ** z!uyarılar** : Etiketlediğin Kişiyi Uyarılarınıa Bakarsınız
:name_badge: **z!uyarı-sil** : Etiketlediğin Kişiyi Uyarısını.
:name_badge: **z!uyarı-log** : Uyarı Log Kanaını Belirlersiniz.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=814787113945399339&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/826147560511111218/826365047252582440/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyarı-sistemi'],
  permLevel: 0
};

exports.help = {
  name: "uyarı-sistemi",
  category: "uyarı-sistemi",
    description: "Eğlence Komutları Gösterir."
};