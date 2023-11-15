// comandos.js
const { obtenerFechaActual } = require('./funciones');
const { banners } = require('./banners');
const { eventos } = require('./eventos');
const {obtenerTiempoRestante} = require('./utilidades');
const prefix = "/";


function comandos(message, client) {

    //Comando /version, desplegar la version actual
    if (message.content === prefix + 'version') {
        const version = 'Actualmente el juego se encuentra en la version: 4.2 | Primera mitad';
        message.channel.send(version);
    }

    //Comando /banners, desplegar los banners actuales
    if (message.content === prefix + 'banners') {
        const bannerActual = banners[0];
        const bannerActual2 = banners[1];
        const ans = `
**Version:** ${bannerActual.version}
**Personajes 5 ★** ${bannerActual.star5} y ${bannerActual2.star5}
**Personajes 4 ★** ${bannerActual.star4.join(', ')}
**Mitad: ** ${bannerActual.mitad}`;
        message.reply(ans);
    }

    //Comando /help, despliega los comandos disponibles
    if (message.content === prefix + 'help'){
        const comHelp = `Comandos dispnibles
        \`/version\` - Despliega en que version se encuentra el juego actualmente
        \`/banners\` - Muestra el/los banners actualmente activos
        \`/upcoming\` - Muestra los banners futuros, incluyendo la fecha de salida de este
        \`/leaks\` - Muestra los leaks de los siguientes banners
        \`/countdown\` - Muestra el tiempo restante para el proximo banner
        \`/eventos\` - Muestra los eventos activos actualmente`;
        message.channel.send(comHelp);
    }

    //Comando /leaks para conocer los leaks de los supuestos nuevos banners
    if (message.content === prefix + 'leaks'){
        const leaks = `Los leaks para la version 4.3 de Genshin Impact apuntan
que los banners serán **Navia + Ayaka** & **Raiden + Yoimiya**`;
        message.channel.send(leaks);
    }

    //Comando /upcoming para ver los proximos banners que esten confirmados
    if (message.content === prefix + 'upcoming'){
        const upcoming = `Los proximos 5★ son **Kamisato Ayato** y **Cyno**
y la segunda mitad de la version 4.2 estará disponible el **28 de Noviembre**`;
        message.channel.send(upcoming);
    }

    //Comando /countdown para ver cuanto falta para el proximo banner
    if (message.content === prefix + 'countdown'){
        const timeLeft = obtenerTiempoRestante(); 
        const countdown = `El tiempo restante para el siguiente banner: ${timeLeft.dias} dias
${timeLeft.horas} horas y ${timeLeft.minutos} minutos`;
        message.channel.send(countdown);
    
    }

    //Comando /events para demostrar que eventos estan activos actualmente
    if (message.content === prefix + 'eventos'){
        const eventosActivos = eventos.filter(evento => evento.activo);

        if (eventosActivos.length > 0) {
        let respuesta = `**Eventos Activos:**\n\n`;
        eventosActivos.forEach((evento) => {
            const tiempoRestante = evento.tiempoRestante();
            respuesta += `${evento.nombre}
**Primogemas obtenibles**: ${evento.primos}
**Tiempo Restante**: ${tiempoRestante.dias} días ${tiempoRestante.horas} horas y ${tiempoRestante.minutos} minutos\n\n`;
        });

        message.channel.send(respuesta);
    } else {
        message.channel.send('No hay eventos activos actualmente');
    }
}
}
module.exports = {
    comandos,
};