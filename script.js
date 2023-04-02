const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lamp = document.getElementById("lamp");
const concertar = document.getElementById("concertar")
const body = document.getElementById("body")


desligar.style.display = "none";

var fisico = false
var quimico = false
function ligada() {
  if (fisico != true) {
    lamp.src = "./img/ligado.png";
    ligar.style.display = "none";
    desligar.style.display = "inline-block"
  }
}
function desligado() {
  if (fisico != true) {
    lamp.src = "./img/lampada.png";
    desligar.style.display = "none";
    ligar.style.display = "inline-block";
  }
}
function quebrado() {
  lamp.src = "./img/quebrado.png";
  fisico= true
  body.style.backgroundColor = "orange"
}

function aparecerbotao(){
    concertar.style.display = "inline-block"
    
}
function desaparecerbotao(){
    concertar.style.display = "none"
    
}

function concertada(){
      lamp.src = "./img/ligado.png";
      fisico = false
      body.style.backgroundColor = "initial"
    }


ligar.addEventListener("click", ligada);

desligar.addEventListener("click", desligado);

lamp.addEventListener("mouseover", ligada);

lamp.addEventListener("mouseleave", desligado);

lamp.addEventListener("dblclick", quebrado);

lamp.addEventListener("dblclick", aparecerbotao);

concertar.addEventListener("dblclick", concertada)

concertar.addEventListener("dblclick", desaparecerbotao)