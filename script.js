const fechaEvento = new Date("August 15, 2026 18:00:00").getTime();

setInterval(() => {

const ahora = new Date().getTime();

const diferencia = fechaEvento - ahora;

const dias = Math.floor(diferencia / (1000*60*60*24));
const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));
const segundos = Math.floor((diferencia%(1000*60))/1000);

document.getElementById("dias").innerHTML=dias;
document.getElementById("horas").innerHTML=horas;
document.getElementById("minutos").innerHTML=minutos;
document.getElementById("segundos").innerHTML=segundos;

},1000);
