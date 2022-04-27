const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
   const emmojiad = client.emojis.cache.get("798525686142468136");
  message.react("798525686142468136")

  const yardım = new Discord.MessageEmbed()
  
  .setTitle("Zenit Yardım Menüsü")
  
  .addField("> **Moderatör Komutları** ", "`afk`, `yavaş-mod`, `uyarı-sistemi`, `mute-sistemi`, `sil`, `gç-ayarla`, `ban`, `unban`, `sa-as`,  `sunucukur`, `otorol`, `nuke`, `güvenlik` `sayaç-kanal-ayarla`, `saya-çayarla` `küfürengel`, `reklamengel`, `giriş-çıkış-kapat`, `kick-sistemi`" )
  .addField("> **Kullanıcı Komutları** ", "`avatar`, `sunucuresmi`, `banlist`, `emojiler`, `rules`, `toplam-komut`, `profil`, `atam`, `roles`") 
  .addField("> **Hayvan Komutları** ", "`kedi`, `koala`, `kuş`, `köpek`, `panda`, `tilki`") 
  
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=968139781466914906&permissions=8&scope=bot)", )

  
  .setImage("https://media.discordapp.net/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif")

  .setTimestamp()

  .setColor("RANDOM")

  message.channel.send(yardım)

} 
module.exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["help"],

  permLevel: 0

};

module.exports.help = {

  name: 'yardım',

  description: 'Yardım',

  usage: 'yardım'

}; 