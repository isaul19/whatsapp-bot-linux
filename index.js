require("dotenv").config();
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("QR Leído exitosamente");
});

client.on("message", async (msg) => {
  console.log(msg);
});

client.initialize();
