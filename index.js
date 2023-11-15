// index.js
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [3276799] });
const { programarTareaBanner, taskFullVersion, taskHalfVersion } = require('./funciones');
const { comandos } = require('./comandos');
const { actualizarEstadoEventos } = require('./eventos');

client.on('ready', () => {
    console.log(`El bot está listo ${client.user.username} se ha conectado.`);
    programarTareaBanner(client);
    taskFullVersion(client);
    taskHalfVersion(client);

    setInterval(() => {
        actualizarEstadoEventos(client);
    }, 10000);
});


client.on('messageCreate', (message) => {
    comandos(message, client);
});
//Login para conectar con discord usando el token (ESTO ES PRIVADO)
client.login('HERE_GOES_YOUR_TOKEN');
