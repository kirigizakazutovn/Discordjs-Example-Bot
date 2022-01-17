module.exports = {
    name: 'purge',
    description: "Clear messages!",
   async  execute(message, args, Discord, client) {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if (!args[0]) return message.reply("Nhập số lượng tin nhắn mà bạn muốn xóa!");
 
        if(isNaN(args[0])) return message.reply("Vui lòng nhập số có giá trị <3");
 
        if(args[0] > 100) return message.reply("Tui không thể xóa ≥ 100 tin nhắn!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");

		if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("I (The bot) need Manage Messages Permissions for this!") // optional
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages, true)
    });
} else {
    message.channel.send(`${message.author}, Bạn không đủ quyền đâu nha!Hãy đảm bảo là bạn đã có quyền quản lý tin nhắn`)
}
 }
}
