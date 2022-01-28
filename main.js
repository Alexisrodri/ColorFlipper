
let parrafo = document.querySelector(".id"); 
const lienzo = document.getElementById("fondo")
let id = window.getComputedStyle(lienzo,'background-color')
const rdm = document.getElementById("rdm");
const colorRandom = ["#FF0000","#FFBB00","#0011FF","#FF7B00","#00FF0D","#FF00AA","#099962","#2f0999","#990939","#991f09","#","#00b7ff","#25B012","#6F00FF","#00FF80","#88FF00","#099962","#2f0999","#990939","#991f09"];

rdm.addEventListener("click",() => {
    lienzo.style.background = colorRandom[Math.floor(Math.random()*colorRandom.length)];
const consola = id.getPropertyValue('background-color');
parrafo.textContent = `${id.backgroundColor}`
})



