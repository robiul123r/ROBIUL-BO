const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🥵")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "উ্ঁফ্ঁ জা্ঁন্ঁ ছা্ঁড়ো্ঁ আ্ঁর্ঁ ক্ঁত্ঁ ব্যা্ঁথা্ঁ লা্ঁগ্ঁছে্ঁ'তো্ঁ__🥹🥵",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/Charo na akhon r koto.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤒", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
                                        }
