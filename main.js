const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const { Permissions } = require('discord.js');

client.once('ready', () =>{
	console.log('Bot žije :O');
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	// say
	if(command === 'test'){
		//
		const embed = new Discord.MessageEmbed()
		//
		.setTitle('Test')
		.setDescription(':white_check_mark: JÁ ŽIJU!')
		.setColor('#00BE84')
		message.channel.send(embed)
	}
});

client.login(process.env.token);