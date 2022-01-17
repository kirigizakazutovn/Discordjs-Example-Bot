module.exports = {
	name: 'kick',
	description: 'Đá một người nào đó ra khỏi máy chủ',
	execute(message, args, Discord, client){
		if(message.member.permissions.has('KICK_MEMBERS')){
			if(!args[0]) return message.reply("Vui lòng ping (@nhắc tới) người đó")
			const target = message.mentions.users.first();

			if(target){
				const memberTarget = message.guild.members.cache.get(target.id);

				memberTarget.kick();


				const kickEmbed = new Discord.MessageEmbed().setTitle("Thông báo").setDescription(`You've been kicked from ${message.guild.name}`)
			target.send(kickEmbed)
			} else {
				message.reply("Người dùng không tồn tại!")
			}
		}
	}
}
