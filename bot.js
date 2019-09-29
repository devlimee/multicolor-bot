
const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json');
let prefix = 'm.'; // Írd át a saját prefixedre

client.on('ready', () => {
  console.log('> A bot sikeresen elindult.') // Ha a bot sikeresen elindult, kiír egy üzenetet a consoleba
  client.user.setPresence({ game: { name: `🌈 Multicolor bot by limee#8911`, type: 'WATCHING' }, status: 'online' });
});

client.on('message', async (msg) => {
  if (msg.content === prefix + 'multicolor') { // A parancs a(z) a következő lesz: prefix + multicolor (például: m.multicolor) - ha a prefix m.-ra van állítva
  if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(`:x: Nincs jogod ehhez. A parancsot csak **adminisztrátor** joggal rendelkező tudja használni.`); 
  const szerver = client.guilds.get("szerverID"); // ID alapján megkeresi a szervert
  if (!szerver) return console.log('Hiba > A szervert nem találom.') //Ha a szervert nem találja, kilogolja a consoleba a hibaüzenetet
  const szerep = szerver.roles.get("szerepID"); // Ha megtalálta a szervert, akkor a guilden belül megpróbálja megkeresni a szerepet ID alapján
  if (!szerep) return console.log('Hiba > A szerepet nem találom.'); //Ha a szerepet nem találja, kilogolja a consoleba a hibaüzenetet
  setInterval(() => {
    const szerepSzerkeszt = Math.floor(Math.random() * (config.colors.length - 1) + 1);
    szerep.setColor(config.colors[szerepSzerkeszt]); // Ez szerkeszti a szerepet
  }, 1 * 5000); // Ne írd át, ha gyorsabb lesz a váltakozás akkor API-bant fogsz kapni
 }}
);

client.on('message', async (msg) => {
  if (msg.content === prefix + 'help') { 
  const embed = new Discord.RichEmbed();
    embed.setColor("RANDOM");
    embed.setTitle("🌈 Multicolor bot by **limee#8911**");
    embed.setDescription("A multicolor bot az 5 másodpercenként váltogatja egy megadott rang színét.\nA rangot, és a szerver ID-t a fájlban lehet átírni.\nAzért 5 másodpercre van rakva a(z) váltogatás ideje, hogy ne kapj API-bant.\n\nA GitHub repo folyamatosan frissítve lesz.\nA botba még sok fejlesztés be fog kerülni.\nA multicolor botot nem úgy kell érteni mint egy rainbow botot.\nNem színárnyalatban váltja a színeket, hanem random.\nPersze lesz rainbow bot is teljesen ingyen!\n\nAz esetleges hibákat jelentsétek nekem Discordon. (**limee#8911**)\nKérlek olvasd el a Github reponak a leírását ahhoz, hogy ne kapj API-bant.\nJó szórakozást.");
   msg.channel.send(embed); 
}});

client.login(config.token); //Bejelentkezés a config tokenjével
