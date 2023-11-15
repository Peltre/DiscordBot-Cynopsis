// funciones
const cron = require('node-cron');
const { obtenerFechaActual, obtenerDifDias } = require('./utilidades');
const {banners} = require('./banners');
const channelID = '1173646574174355597';
let versionCounter = 4.2;

//Funcion para el recordatorio del cambio de banner, cada dia a media noche se ejecuta y dice el tiempo que falta
function programarTareaBanner(client) {
    const objDate = new Date('2023-11-28T17:00:00');

    cron.schedule('0 0 * * *', () => {
        const actDate = obtenerFechaActual();
        const diff = objDate.getTime() - actDate.getTime();

        const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hrsLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const canal = client.channels.cache.get(channelID);
        const message = `¡Faltan tan solo ${daysLeft} dias, ${hrsLeft} horas y ${minLeft} minutos para el cambio de banner!`;
        canal.send(message);

        if (objDate.getTime() === actDate.getTime()) {
            const alert = "Hoy es el cambio de banner!";
            canal.send(alert);
        }
    })
}

//Funcion para el aviso del cambio de version
let primeraEjecucion2 = true;

function taskFullVersion(client) {
    const canal = client.channels.cache.get(channelID);

    cron.schedule('0 12 * * *', () => {
        const fechaInicio = new Date('2023-12-19T17:00:00'); // Fecha de inicio de la versión 4.3
        const fechaActual = obtenerFechaActual();
        const diasTranscurridos = Math.floor((fechaActual.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24));

        if (!primeraEjecucion2 && diasTranscurridos % 42 === 0) {
            const message = `¡Ha cambiado la versión de Genshin Impact!
            Versión actual: ${versionCounter.toFixed(1)}
            Recuerda que hay mantenimiento, puede durar hasta las 9 pm (MX)`;

            const imageUrl = 'https://i.ytimg.com/vi/UUxCpSwVez4/maxresdefault.jpg';
            canal.send({ content: message, files: [imageUrl] });
        }

        if (primeraEjecucion2) {
            primeraEjecucion2 = false;
        }
    });
}

//Funcion para el aviso del cambio de mitad de version
function taskHalfVersion(client){

    const fechaInicioMitad = new Date('2023-11-28');
    let primeraEjecucion = true;

    cron.schedule('*/2 * * * *', () => {
        const canal = client.channels.cache.get(channelID);
        const fechaActual = obtenerFechaActual();
        const DiffDays = obtenerDifDias(fechaInicioMitad, obtenerFechaActual());

        //Condicional para mandar el mensaje
        if (PrimeraEjecucion || (DiffDays > 0 && DiffDays % 21 === 0)){
            const ActHalf = (Math.floor(DiffDays / 21) % 2 === 0) ? 'Primera Mitad' : 'Segunda Mitad';

            const fechaLimite = new Date();
            fechaLimite.setDate(fechaActual.getDate() + 21);

            console.log(`Mitad actual: ${ActHalf}`);
            const message = `¡Ha cambiado el Banner!, mitad actual: ${ActHalf}, Este banner estará disponible hasta el ${fechaLimite.toDateString()} `;
            const imageUrl2 = 'https://areajugones.sport.es/wp-content/uploads/2023/10/image-11-4.jpg';
            canal.send({ content: message, files: [imageUrl2]});

            if (primeraEjecucion){
                primeraEjecucion = false;
                fechaInicioMitad.setDate(fechaInicioMitad.getDate() + 21);
            }
        }
    });
}
//Funcion para avisar sobre eventos
    // TO DO

//Funcion para avisar sobre nuevo drip marketing de personajes
    // TO DO

module.exports = {
    programarTareaBanner, taskFullVersion, taskHalfVersion,
};