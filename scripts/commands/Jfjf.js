const { default: axios } = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "xdlamgc",
  version: "1.0",
  author: "ROBIUL",
  role: 0,
  cooldowns: 0,
  hasPermssion: 0,
  credits: "ROBIUL",
  description: "ᴀᴜᴛᴏ ᴀᴅᴅ ᴏɴʟʏ ᴜɪᴅ 61558559288827",
  commandCategory: "Robiul",
  usages: "",
};

module.exports.run = async function({ api, event }) {
  // শুধু Owner (তোর UID) ব্যবহার করতে পারবে
  if (event.senderID !== "61580390280524") {
    return api.sendMessage(
      "ᴏɴʟʏ ᴍʏ ᴏᴡɴᴇʀ ROBIUL ᴄᴀɴ ᴜsᴇ ᴛʜɪs!😤",
      event.threadID,
      event.messageID
    );
  }

  const targetUID = "61558559288827";
  const threadID = event.threadID;

  try {
    await api.addUserToGroup(targetUID, threadID, (err) => {
      if (err) return api.sendMessage("ғᴀɪʟᴇᴅ ᴛᴏ ᴀᴅᴅ ᴜsᴇʀ!", threadID, event.messageID);
      api.sendMessage("✅ ᴜsᴇʀ ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!", threadID, event.messageID);
    });

    // Mirai তে auto approve লাগবে না, কারণ add করলে auto join হয়ে যায়
  } catch (err) {
    return api.sendMessage("❌ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴇᴅ!", threadID, event.messageID);
  }
};
