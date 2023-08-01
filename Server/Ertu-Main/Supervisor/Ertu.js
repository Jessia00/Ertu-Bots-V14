require("../../../Global/Helpers/Extenders/Prototypes");

const System = require("../../../Global/Settings/System");
const { Ertu } = require("./src/Structures/Ertu");
const { Collection,GuildMember } = require("discord.js");


let client = global.client = new Ertu({ 
   Directory: "Ertu V14 Bot", 
   token: System.Mainframe.Moderation,
});

client.loadClient({
   Events   : true,
   Commands : true,
   Database : true,
});

const { GiveawaysManager } = require('discord-giveaways');
const manager = new GiveawaysManager(client, {
  storage: './../../../Global/Settings/giveaways.json',
  default: {
    botsCanWin: false,
    embedColor: '#00ff00',
    embedColorEnd: '#ff0000',
    reaction: '🎉',
    lastChance: {
      enabled: true,
      content: 'KATILIM İÇİN SON ŞANS!',
      threshold: 20000,
      embedColor: '#FF0000'
    }

  }
});
client.giveawaysManager = manager;

client.rolbul = function (rolisim) {
  let rol = client.guilds.cache.get(System.ServerID).roles.cache.find(ertu => ertu.name === rolisim)
  if (!rol) return false;
  return rol;
}

client.emoji = function (emojiName)  {
  const emoji = client.emojis.cache.find(x => x.name.includes(emojiName));
  if (!emoji) return null;
  return emoji;
} 

client.ranks = [
  { role: "1121409813537116211", coin: 2000 },
  { role: "1121409824496816208", coin: 5000 },
  { role: "1121409822194147348", coin: 8000 },
  { role: "1121409821023940701", coin: 10000 },
  { role: "1121409819841155072", coin: 13000 },
  ]
  
module.exports = client;
client.connect();
