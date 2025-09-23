//METODO
// //objeto
// const curso = {
//   //propriedade
//   nome: "JavaScript",
//   //funcao declarada sem precisar escrever function
//   completar() {
//     //metodo
//     console.log("Curso Completo");
//   },
// };

// console.log(curso.nome);
// curso.completar();

// const curso = {
//   nome: "JavaScript",
//   completar() {
//     console.log(this.nome);
//   },
// };

// curso.completar();

//EVENTO
// const ativar = document.querySelector(".ativar");

// function ativarAoClick() {
//   console.log("Clicou em:", ativar);
// }

// ativar.addEventListener("click", ativarAoClick);

// console.log(ativar);

const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event  */
function ativarAoClick(event) {
  console.log(event.x);
}

ativar.addEventListener("click", ativarAoClick);

console.log(ativar);
