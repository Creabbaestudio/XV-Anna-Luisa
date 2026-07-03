document.getElementById("abrir").addEventListener("click", function () {

    document.querySelector(".envoltura").classList.add("abierto");

    setTimeout(function(){

        document.getElementById("sobre").style.opacity="0";

        setTimeout(function(){

            document.getElementById("sobre").style.display="none";

            const contenido=document.getElementById("contenido");

            contenido.classList.add("mostrar");

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },700);

    },1000);

});
