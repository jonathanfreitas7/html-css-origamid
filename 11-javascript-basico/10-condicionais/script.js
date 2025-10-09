const elemento = document.querySelector("p");
const texto = elemento.innerText;

console.log(texto);

if (texto.toLocaleUpperCase() === "HTML") {
  console.log("Executar código");
}

if (10 !== "10") {
  console.log("executou");
}
