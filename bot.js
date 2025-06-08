// bot.js
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Badmosh-w5e8.aternos.me', // Your Aternos server address
  port: 21893,                    // Default Minecraft port
  username: 'Vivanj',       // Use a Minecraft alt account
  version: '1.20.1'              // Match your server version
});

bot.on('end', () => {
  console.log('Bot disconnected, reconnecting...');
  setTimeout(() => require('./bot'), 5000); // Auto-reconnect
});
setInterval(() => bot.setControlState('jump', true), 60000);
