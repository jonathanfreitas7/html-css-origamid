function livro(nome, ano, autor) {
  const nomeMaiusculo = nome.toUpperCase();
  const anoLivro = 2050 - ano;
  const frase = nome + " por " + autor;

  const retorno = {
    nomeMaiusculo,
    anoLivro,
    frase,
  };

  return retorno;
}

const livro1 = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livro1);
