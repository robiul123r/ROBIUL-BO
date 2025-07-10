const fs = require("fs");
module.exports = {
  config:{
	name: "npx15",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🐸")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "ব্যাৃঁংকৃঁ কা্ঁকে্ঁ দেৃঁখাৃঁওৃঁ ব্যা্ঁংক্ঁ দেৃঁখেৃঁ তো্ঁ আৃঁমিৃঁ ভ্ঁয়্ঁ পাৃঁইৃঁ না্ঁ 🐸🥴",
				attachment: fs.createReadStream(__dirname + `/ArYan/beng.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }
