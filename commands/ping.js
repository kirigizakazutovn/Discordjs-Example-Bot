module.exports = {
	name: 'ping',
	description: 'Kiểm tra phản hồi',
	execute(message, args, Discord, client){
		message.reply('Pong!Độ trễ là 1.2s')
	}
}
