const DISCORD_RPC = require("discord-rpc");
const RPC = new DISCORD_RPC.Client({ transport: "ipc" });

DISCORD_RPC.register(process.env.app_id);

async function activity() {
  if (!RPC) return;

  RPC.setActivity({
    details: "Tes Discord",
    state: "Tes Discord 2",
    largeImageKey: "unnamed",
    largeImageText: "Tes Image 1",
    smallImageKey: "unnamed",
    smallImageText: "Tes Image 2",
    instance: false,
    startTimestamp: Date.now(),
    buttons: [
      {
        label: "Tes Link 1",
        url: "https://www.google.com",
      },
      {
        label: "Tes Link 1",
        url: "https://www.facebook.com",
      },
    ],
  });
}

RPC.on("ready", async () => {
  console.log("RPC is enabled");
  activity();

  setInterval(() => {
    activity();
  }, 1000000);
});

RPC.login({ clientId: process.env.app_id });
