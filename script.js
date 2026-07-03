// ===== ABRIR SOBRE =====

const botonAbrir = document.getElementById("abrir");
const sobre = document.querySelector(".sobre");
const pantallaSobre = document.getElementById("sobre");
const contenido = document.getElementById("contenido");

botonAbrir.addEventListener("click", () => {

    sobre.classList.add("abierto");

    // Aquí inicia la música (cuando agreguemos el MP3)
    // musica.play();

    setTimeout(() => {

        pantallaSobre.style.opacity = "0";

        setTimeout(() => {

            pantallaSobre.style.display = "none";
            contenido.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 800);

    }, 1300);

});


// ===== CUENTA REGRESIVA =====

const fechaEvento = new Date("August 1, 2026 18:00:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        dias.innerHTML="00";
        horas.innerHTML="00";
        minutos.innerHTML="00";
        segundos.innerHTML="00";

        return;
    }

    dias.innerHTML = Math.floor(diferencia / (1000*60*60*24));

    horas.innerHTML = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    minutos.innerHTML = Math.floor((diferencia%(1000*60*60))/(1000*60));

    segundos.innerHTML = Math.floor((diferencia%(1000*60))/1000);

}

actualizarContador();

setInterval(actualizarContador,1000);
