const fs = require("fs");
module.exports = {
  config:{
	name: "npx1",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😱")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "বুঁঝ্ঁলাৃঁম্ঁ না্ঁ বাৃঁবুঁ এ্ঁভাৃঁবে্ঁ চোৃঁখ্ঁ বৃ্ঁড়্ঁ বৃঁড়্ঁ কৃঁরে্ঁ অৃঁবাৃঁক্ঁ হ্ঁয়ে্ঁ দেৃঁখা্ঁরৃঁ কি্ঁ আৃঁছে্ঁ-🤷😑",
				attachment: fs.createReadStream(__dirname + `/ArYan/bujlam na babu chokh.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }
