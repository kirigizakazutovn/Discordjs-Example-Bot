module.exports = {
	name: 'cmds',
	description: 'shows all commands',
	execute(message, args, Discord, client){
		require('dotenv').config();

		const prefix = process.env.BotPrefix

		const CmdEmbed = new Discord.MessageEmbed()
			.setTitle(":robot: Commands")
			.addFields(
				{name: ':shield: Quản lý', value: `${prefix}kick <@user>\n${prefix}ban <@user>`, inline: true},
				{name: '🥳 Niềm vui', value: `${prefix}ping`, inline: true},
				{name: ':speech_left: Tin nhắn', value: `${prefix}purge`, inline: true}
			)
		message.channel.send(CmdEmbed)
	}
}
