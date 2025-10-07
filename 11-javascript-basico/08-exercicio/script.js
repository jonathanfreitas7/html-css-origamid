const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  circulo.style.top = y + "px";
  circulo.style.left = x + "px";
}

window.addEventListener("mousemove", seguirMouse);
