const client = require("../index");

client.on("ready", async () => {
  console.log(`Bot is up and ready to go!`);
  client.user.setActivity(`Vicegram.`, {
    type: "LISTENING",
  });
});
