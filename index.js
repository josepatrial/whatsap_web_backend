const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth() // Mantém sessão local para não precisar escanear QR toda hora
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED:', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log('Received message:', message.body);
    if (message.body === '!ping') {
        message.reply('pong');
    }
});

client.initialize();
