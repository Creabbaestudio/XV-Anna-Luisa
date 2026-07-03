document.getElementById("abrir").onclick=function(){

document.querySelector(".envoltura").classList.add("abierto");

setTimeout(function(){

document.getElementById("sobre").style.display="none";

document.getElementById("contenido").style.display="block";

window.scrollTo(0,0);

},1200);

}
