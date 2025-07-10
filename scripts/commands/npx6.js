const fs = require("fs");
module.exports = {
  config:{
	name: "npx6",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😋")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "বা্ঁবু্ঁ খা্ঁই্ঁছো্ঁ__🤗🤭",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/babu khaiso.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥴", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
    }
