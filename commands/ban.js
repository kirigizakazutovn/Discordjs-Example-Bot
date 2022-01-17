module.exports = {
	name: 'ban',
	description: 'Cấm một người nào đó khỏi máy chủ',
	execute(message, args, Discord, client){
		if(message.member.permissions.has('BAN_MEMBERS')){
			if(!args[0]) return message.reply("Vui lòng ping (@nhắc) người cần ban")
			const target = message.mentions.users.first();

			if(target){
				const memberTarget = message.guild.members.cache.get(target.id);

				memberTarget.ban();


				const banEmbed = new Discord.MessageEmbed().setTitle("Banned").setDescription(`Bạn đã bị cấm khỏi máy chủ ${message.guild.name}`)
			target.send(banEmbed)
			} else {
				message.reply("This user does not exist!")
			}
		}
	}
}
