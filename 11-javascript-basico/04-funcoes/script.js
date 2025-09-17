/* Funcao......
// function logCurso() {
// const nome = "JavaScript";
// const horas = "40 horas";
// console.log(nome, horas);
// }

// logCurso();
// logCurso();
// logCurso();

function logCurso(nome) {
console.log(nome);
}

logCurso("JavaScript");
logCurso("HTML");

function logCurso(nome, horas) {
console.log(nome, horas, "horas");
}

logCurso("JavaScript", "40");
logCurso("HTML", "20");*/

/*Retorno.......
function logCurso(nome, horas) {
  console.log(nome, horas, "horas");
  return nome;
}

logCurso("JavaScript", "40");
const retorno = logCurso("HTML", "20");

console.log(retorno);

function logCurso(nome, horas) {
  console.log(nome, horas, "horas");
  return {
    nomeTeste: nome,
    horasTeste: horas,
  };
}

const retorno = logCurso("JavaScript", "40");
logCurso("HTML", "20");

console.log(retorno); //Ou (retorno.horasTeste);*/

//Escopo
const nome = "JavaScript";

function logCurso() {
  const nome = "HTML";
  console.log(nome);
  return nome;
}

const nomedaFuncao = logCurso();

console.log(nomedaFuncao);
console.log(nome);
