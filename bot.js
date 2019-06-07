bot.on('serverNewMember',function (user, userID, channelID, message, evt){
if(user === bot.servers.get('id',"SERVERID"))
bot.sendMessage(channelID.get('name','general'),"Welcome to my Server "+user.mention()+"!")
})
vregggrg
