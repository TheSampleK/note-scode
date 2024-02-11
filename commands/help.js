const Discord = require('discord.js')
const {Prefıx} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
`   
  
**  🎧 | Maestro Keyifli Dinlemeler Diler. Beni Tercih Ettiğiniz İçin Teşekkürler **

  
 **<:mok:829459914095198208><a:emoy:829308563474219018>Merhaba <@${message.author.id}> kullanıcım.**
 **<:mok:829459914095198208><a:emoy:829308563474219018> Prefixim : .**
 **<:mok:829459914095198208><a:emoy:829308563474219018> Dilim :**  <:tr:829459054798962748>
 
**<:mok:829459914095198208> <a:emoy:829308563474219018> » .oynat <şarkı-adı> : Bir Şarkıyı Oynatır.
<:mok:829459914095198208> <a:emoy:829308563474219018> » .atla : Sıradaki Şarkıyı atlar.
<:mok:829459914095198208> <a:emoy:829308563474219018> » .döngü : O Anki şarkıyı Hep tekrarlar.
<:mok:829459914095198208> <a:emoy:829308563474219018> » .durdur : O anki Şarkıy
<:mok:829459914095198208><a:emoy:829308563474219018>» .devam : Duran Şarkıyı Devam Ettirir.
<:mok:829459914095198208> <a:emoy:829308563474219018> » .sıra : O Anki Sırayı Gösterir.
<:mok:829459914095198208> <a:emoy:829308563474219018> » .np : O Anki Oynatılan Şarkıyı Söyler.**
**<:mok:829459914095198208> <a:emoy:829308563474219018> » .davet : Botun Davet Komutlarını Gösterir.**
**Maestro Bot | 2021 © Tüm Hakları Saklıdır**

`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/814483180123193356/829305068397264896/LH9PSj.gif")
.setImage("https://i.gifer.com/N2Ed.gif")       )                  
}
}