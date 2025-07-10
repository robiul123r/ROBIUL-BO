const fs = require("fs");
module.exports = {
  config:{
	name: "npx21",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😇")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "কি্ঁগো্ঁ প্রে্ঁমে্ঁ হা্ঁবুডু্ঁবু্ঁ খা্ঁচ্ছ্ঁ না্ঁকি্ঁ তু্ঁমি্ঁ 😌🙀",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/ki go preme.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
