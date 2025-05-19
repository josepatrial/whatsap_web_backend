const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('QR Code recebido, escaneie com seu WhatsApp:\n', qr);
});

client.on('ready', () => {
    console.log('WhatsApp Web Client está pronto!');
});

client.on('message', message => {
    console.log(`Mensagem de ${message.from}: ${message.body}`);

    if(message.body.toLowerCase() === 'ping') {
        message.reply('pong');
    }
});

client.initialize();
