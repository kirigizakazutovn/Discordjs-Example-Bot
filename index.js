const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const fs = require('fs');

client.commands = new Discord.Collection();

const Prefix = process.env.BotPrefix

const keepingAlive = require(`./server.js`)

client.on('ready', () => {
	console.log('ready')
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message =>{
	if(!message.content.startsWith(Prefix) || !message.author.bot)

	var args = message.content.slice(Prefix.length).split(/ +/);
 	const command = args.shift().toLowerCase();
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args, Discord, client)
	} else if (command === 'kick'){
		client.commands.get('kick').execute(message, args, Discord, client)
	} else if (command === 'ban'){
		client.commands.get('ban').execute(message, args, Discord, client)
	} else if (command === 'cmds'){
		client.commands.get('cmds').execute(message, args, Discord, client)
	} else if (command === 'purge'){
		client.commands.get('purge').execute(message, args, Discord, client)
	}
});

keepingAlive;

client.login(process.env.Token)
