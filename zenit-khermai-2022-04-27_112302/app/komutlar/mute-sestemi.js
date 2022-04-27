const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'z!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('qew 2.5 Mute Menüsü',`
:lock: **z!mute** : Etiketlediğiniz  Kişiyi Mute Atarş
:lock: **z!muterol** : Mute Rolunu Ayarlarsınız.
:lock: **z!umute** : Etiketlediğiniz  Kişiyi Mutesini Geri Alır`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=814787113945399339&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/826147560511111218/826365047252582440/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute-sistemi'],
  permLevel: 0
};

exports.help = {
  name: "mute-yardım",
  category: "mute-yardım",
    description: "Eğlence Komutları Gösterir."
};