const fs = require("fs");
module.exports = {
  config:{
	name: "npx17",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😂")==0 || body.indexOf("😆")==0) {
		var msg = {
				body: "আ্ঁরেৃঁ আ্ঁস্তেৃঁ হা্ঁসৃঁতে্ঁ হা্ঁসৃঁতে্ঁ দা্ঁতৃঁ খু্ঁলেৃঁ যা্ঁবেৃঁ ত্ঁখৃঁন্ঁ মাৃঁংস্ঁ খেৃঁতে্ঁ পাৃঁর্ঁবেৃঁ না্ঁ 🦷👈👉🍗🤭",
				attachment: fs.createReadStream(__dirname + `/ROBIUL/areastedt.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
