// Invocamos o leitor de qr code

const qrcode = require("qrcode-terminal");

const { Client, Buttons, List, MessageMedia } = require("whatsapp-web.js"); // Mudança Buttons

const client = new Client();

// entao habilitamos o usuario a acessar o serviço de leitura do qr code

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// apos isso ele diz que foi tudo certin

client.on("ready", () => {
  console.log("Tudo certo! WhatsApp conectado.");
});

// E inicializa tudo para fazer a nossa magica =)

client.initialize();

const delay = (ms) => new Promise((res) => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil Base Projeto
client.on('message', async message => {
    if (message.body === 'ATIVAR') {

        const contact = await message.getContact(); //Pegando o contato

        const name = contact.pushname; //Pegando o nome do contato

        await client.sendMessage(message.from,'Olá! '+ name.split(" ")[0] + ', Seja muito bem vindo. Você entrou no Funil Basico do treinamento Chatbot projetado pelo Jardel'); //Primeira mensagem de texto

        const button = new Buttons('Button body', [{ body: 'bt1' }, { body: 'bt2' }, { body: 'bt3' }], 'title', 'footer');
        client.sendMessage(message.from, button);

        // const chat = await message.getChat();
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        // await message.reply('Olá! Seja muito bem vindo. Você entrou no Funil Basico do treinamento Chatbot projetado pelo Jardel'); //Primeira mensagem de texto
        // await delay(1000); //delay de 1 segundo
        // await client.sendMessage(message.from, 'Você vai ter contato com as funcionalidades básicas do nosso projeto e poderá ver o quanto é fácil criar seus próprios funis personalizados ao seu negócio.');
        // await delay(3000); //delay de 3 segundos
        // await client.sendMessage(message.from, 'Agora vamos testar os botões. 😎');
        // // await client.sendMessage(message.from, new Buttons('Olha que bacana', [{id:'customId',body:'Bacana demais!!'},{body:'Eu concordo, mto mesmo..'}, {body:'Olha o terceiro botao'}], 'Vamos lá...', 'Escolha abaixo 👇'));
        // await delay(3000); //delay de 3 segundos
        // let info = client.info;
        // await client.sendMessage(message.from, `
        //     *Connection info*
        //     User name: ${info.pushname}
        //     My number: ${info.wid.user}
        //     Platform: ${info.platform}
        // `);
        // await delay(3000); //delay de 3 segundos
        // let button = new Buttons('Button body', [{ body: 'bt1' }, { body: 'bt2' }, { body: 'bt3' }], 'title', 'footer');
        // client.sendMessage(message.from, button);

    }
});
