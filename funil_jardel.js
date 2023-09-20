// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// entao habilitamos o usuario a acessar o serviço de leitura do qr code
client.on('qr', qr => {
qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certin
client.on('ready', () => {
console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo para fazer a nossa magica =)
client.initialize();
const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

client.on('message', async msg => { 

if (msg.body === 'ATIVAR FUNIL BASICO') {
    const chat = await msg.getChat();
    chat.sendStateTyping(); // Simulando Digitação
    await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    msg.reply('Eu sou o Funil Jardel'); //Primeira mensagem de texto
    await delay(1000); //delay de 1 segundo
    client.sendMessage(msg.from, 'Esta é a segunda mensagem do funil Jardel');
    await delay(3000); //delay de 3 segundos
    client.sendMessage(msg.from, 'Olha os 3 botoes');
    client.sendMessage(msg.from, new Buttons('Olha que bacana',
    [{id:'customId',body:'Jardel 1'},{body:'Jardel 2'}, {body:'Jardel 3'}],
    'Vamos lá...', 'Escolha abaixo '));
    }
    
    if (msg.body === 'Jardel 1') {
        const chat = await msg.getChat();
        chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        msg.reply('Escolheu o Jardel 1'); //Primeira mensagem de texto
        await delay(1000); //delay de 1 segundo
        client.sendMessage(msg.from, 'Olha o audio do Jardel 1');
        await delay(3000); //delay de 3 segundos
        const audio1 = MessageMedia.fromFilePath('./audio_jardel.ogg');
        // Arquivo de audio em ogg gravado
        client.sendMessage(msg.from, audio1, {sendAudioAsVoice: true});
        // enviando o audio1
        await delay(3000); //Delay de 3 segundos
        client.sendMessage(msg.from, 'Olha a imagem do Jardel 1');
        await delay(3000); //Delay de 3 segundos
        const img1 = MessageMedia.fromFilePath('./imagem_jardel.png'); // arquivo em imagem
        client.sendMessage(msg.from, img1, {caption: 'Olha que legal'});
        //Enviando a imagem


        }

        if (msg.body === 'Jardel 2') {
            const chat = await msg.getChat();
            chat.sendStateTyping(); // Simulando Digitação
            await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
            msg.reply('Escolheu o Jardel 1'); //Primeira mensagem de texto
            await delay(1000); //delay de 1 segundo
            client.sendMessage(msg.from, 'Olha o audio do Jardel 1');
            await delay(3000); //delay de 3 segundos
            const audio1 = MessageMedia.fromFilePath('./audio_jardel.ogg');
            // Arquivo de audio em ogg gravado
            client.sendMessage(msg.from, audio1, {sendAudioAsVoice: true});
            // enviando o audio1
            await delay(3000); //Delay de 3 segundos
            client.sendMessage(msg.from, 'Olha a imagem do Jardel 1');
            await delay(3000); //Delay de 3 segundos
            const img1 = MessageMedia.fromFilePath('./imagem_jardel.png'); // arquivo em imagem
            client.sendMessage(msg.from, img1, {caption: 'Olha que legal'});
            //Enviando a imagem
    
    
            }

            if (msg.body === 'Jardel 3') {
                const chat = await msg.getChat();
                chat.sendStateTyping(); // Simulando Digitação
                await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
                msg.reply('Escolheu o Jardel 1'); //Primeira mensagem de texto
                await delay(1000); //delay de 1 segundo
                client.sendMessage(msg.from, 'Olha o audio do Jardel 1');
                await delay(3000); //delay de 3 segundos
                const audio1 = MessageMedia.fromFilePath('./audio_jardel.ogg');
                // Arquivo de audio em ogg gravado
                client.sendMessage(msg.from, audio1, {sendAudioAsVoice: true});
                // enviando o audio1
                await delay(3000); //Delay de 3 segundos
                client.sendMessage(msg.from, 'Olha a imagem do Jardel 1');
                await delay(3000); //Delay de 3 segundos
                const img1 = MessageMedia.fromFilePath('./imagem_jardel.png'); // arquivo em imagem
                client.sendMessage(msg.from, img1, {caption: 'Olha que legal'});
                //Enviando a imagem
        
        
                }
        
       
});            
            
    
        