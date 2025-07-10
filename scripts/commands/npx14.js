const fs = require("fs");
module.exports = {
  config:{
	name: "npx14",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😒")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "এ্ঁ দি্ঁক্ঁ ও্ঁ দি্ঁক্ঁ কী্ঁ দে্‌খো্ঁ জা্ঁন্ঁ আ্ঁমি্ঁ তো্ঁ এ্‌'দি্ঁকে্ঁ 👻😁",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/adikodikkidekho.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤨", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }
