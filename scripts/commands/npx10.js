const fs = require("fs");
module.exports = {
  config:{
	name: "npx10",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🫢")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "আ্ঁমি্ঁ ব্ঁলু্ঁম্ঁ না্ঁ আ্ঁমা্ঁর্ঁ স্ঁর্ঁম্ঁ ক্ঁরে্ঁ,🤐🤭",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/sorom .mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😺", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }
