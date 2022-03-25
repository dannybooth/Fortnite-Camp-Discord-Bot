const Discord = require('discord.js');

const bot = new Discord.Client();

const legendary = ["<:InfinityGauntlet:671447352426496000>","<:LegendaryScar:671447337083600946>","<:Sniper:671450893371310081>"]
const epic = ["<:RocketLauncher:671447337222012939>","<:ChugJug:671447341575831591>","<:QuickRevive:671806053842681889>","<:machinegun:690263409513594906>"]
const rare = ["<:Tacticalshotgun:671447331371220994>","<:BoogieBomb:690263459119890670>","<:golfcart:773258070284697630>"];
const uncommon = ["<:Grenade:671447337637249025>","<:Medkit:671447326992367627>","<:Metal:671447340191580220>"];
const common = ["<:DualPistol:671447323640987661>","<:Ammo:671447308662997025>","<:ShieldPotion:671447258004455424>"]

bot.on('ready', () =>{
    console.log('The bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === 's'){
        var roll = [Math.floor(Math.random() * 100)+ 1]
        if(roll <= 2)
        {
            msg.channel.send(legendary[Math.floor(Math.random() * legendary.length)]);
        }
        else if(roll <= 17)
        {
            msg.channel.send(epic[Math.floor(Math.random() * epic.length)]);
        }
        else if(roll <= 40)
        {
            msg.channel.send(rare[Math.floor(Math.random() * rare.length)]);
        }
        else if(roll <= 65)
        {
            msg.channel.send(uncommon[Math.floor(Math.random() * uncommon.length)]);
        }
        else
        {
            msg.channel.send(common[Math.floor(Math.random() * common.length)]);
        }
    }
    if(msg.content === 'lets see whos eliminated'){
        var removed = ["jerry", "antiquatedhomeworkz", "evil silverkoopa", "eviler silverkoopa", "minion humour", "Phantastrophy", "ring ring fortnite phone", "touhou", "cheeky", "jojoheavy", "twitterspy"]
        var rolll, b, bb = "";
        for(var i = 0;i<4;i++)
        {
            rolll = Math.floor(Math.random() * removed.length);
            b = removed[rolll];
            bb = bb+ b+ ", ";
            removed.splice(rolll,1);
        }
        rolll = Math.floor(Math.random() * removed.length);
        b = removed[rolll];
        bb = bb+ "and " + b + " are eliminated!";
        msg.channel.send(bb);
    }
})

bot.login('');