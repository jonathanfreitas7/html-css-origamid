//primeira forma de realizar o exercicio:

// function livro(nome, ano, autor) {
//   const nomeMaiusculo = nome.toUpperCase();
//   const anoLivro = 2050 - ano;
//   const frase = nome + " por " + autor;

//   const retorno = {
//     nome: nomeMaiusculo,
//     anoLivro,
//     frase,
//   };

//   return retorno;
// }

// const livro1 = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(livro1.frase);

//segunda forma de realizar o exercicio:

// function livro(nome, ano, autor) {
//   const retorno = {
//     nome: nome.toUpperCase(),
//     anoLivro: 2050 - ano,
//     frase: nome + " por " + autor,
//   };
//   return retorno;
// }

// const livro1 = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(livro1.frase);

//terceira forma de realizar o exercicio:

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    anoLivro: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livro1 = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livro1);
