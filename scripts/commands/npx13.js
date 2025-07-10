const fs = require("fs");
module.exports = {
  config:{
	name: "npx13",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "ROBIUL", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🤣")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "পা্ঁগ্ঁল্ঁ না্ঁকি্ঁ এ্ঁভা্ঁবে্ঁ কে্ঁউ্ঁ হা্ঁসে্ঁ 😧🙊",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/ababe kew hase.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
