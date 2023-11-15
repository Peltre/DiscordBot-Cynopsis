// utilidades.js
//Funcion para obtener la fecha Actual
function obtenerFechaActual() {
    return new Date();
}

//Funcion para obtener la diferencia de dias
function obtenerDifDias(fechaInicio, fechaFin) {
    const unDia = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos
    const diferenciaMs = Math.abs(fechaFin - fechaInicio);
    return Math.round(diferenciaMs / unDia);
}

//Funcion para obtener el tiempo restante hasta la fecha objetivo 

let fechaObjetivo = new Date('2023-11-28T17:00:00');
function obtenerTiempoRestante() {
    const fechaActual = new Date();

    if (fechaActual >= fechaObjetivo){
        fechaObjetivo = new Date(fechaActual);
        fechaObjetivo.setDate(fechaObjetivo.getDate() + 21);
    }

    const diferenciaTiempo = fechaObjetivo.getTime() - fechaActual.getTime();
    const diasRestantes = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosRestantes = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));

    return {
        dias: diasRestantes,
        horas: horasRestantes,
        minutos: minutosRestantes,
    };
}

module.exports = {
    obtenerFechaActual, obtenerDifDias, 
    obtenerTiempoRestante, fechaObjetivo,
};