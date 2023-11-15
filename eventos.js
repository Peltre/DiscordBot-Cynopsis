// eventos.js

const { EmbedBuilder } = require('discord.js');


class Evento {
    constructor(nombre, primos, fechaFinalizacion) {    
        this.nombre = nombre;
        this.primos = primos;
        this.fechaFinalizacion = fechaFinalizacion;
        this.activo = true;
    }

    tiempoRestante(){
        const fechaActual2 = new Date();
        const diferenciaTiempo2 = this.fechaFinalizacion.getTime() - fechaActual2.getTime();
        const diasRestantes2 = Math.floor(diferenciaTiempo2 / (1000 * 60 * 60 * 24));
        const horasRestantes2 = Math.floor((diferenciaTiempo2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosRestantes2 = Math.floor((diferenciaTiempo2 % (1000 * 60 * 60)) / (1000 * 60));
        return {
            dias : diasRestantes2,
            horas : horasRestantes2,
            minutos : minutosRestantes2
        };
    }
}

//Creamos las instancias de eventos
const eventos = [
    new Evento('Mazmorra de la bruma: Territorio acuatico', 420, new Date('2023-11-19T17:00:00')),
    //new Evento('Evento 2', 30, new Date('2023-11-15T10:35:00'))
];

//Funcion para notificar cuando se termina un evento
function enviarMensajeEventoF(client, evento) {
    const canal = client.channels.cache.get('1173646574174355597');
    const embed = new EmbedBuilder()
    .setTitle(`¡El evento ${evento.nombre} ha finalizado!`)
    .setDescription(`¡Buena suerte en el próximo evento!`)
    .setColor('#00ff00'); // Color del embed

canal.send({ embeds: [embed] });
}   


//Funcion para actualizar eventos
function actualizarEstadoEventos(client) {
    eventos.forEach(evento => {
        const tiempoRestante = evento.tiempoRestante(); // Obtén el tiempo restante de esta manera

        if (evento.activo && (tiempoRestante.dias < 0 || (tiempoRestante.dias === 0 && tiempoRestante.horas <= 0 && tiempoRestante.minutos <= 0))) {
            evento.activo = false;
            console.log(`El evento ${evento.nombre} ha finalizado!`);

            enviarMensajeEventoF(client, evento);
        }
    });
}
module.exports = {
    eventos, Evento, actualizarEstadoEventos, enviarMensajeEventoF
}