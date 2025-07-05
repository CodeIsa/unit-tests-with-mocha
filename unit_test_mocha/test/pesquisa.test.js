const {pesquisarPessoaPorCpf} = require('../src/pesquisa');
const {strictEqual} = require('node:assert');

describe('pesquisaPessoaPorCpf', () => {
  it('Ao informar o CPF da Isabelle teremos o seu nome, CPF e frutas favoritas', () => {
    //Arrange
    const cpfPesquisado = '123.456.789-00'
    const nomeEsperado = 'Isabelle'
    const cpfEsperado = '123.456.789-00'
    const primeiraFrutaEsperada = 'uva'
    const segundaFrutaEsperada = 'manga'

    //Act
    const pessoa = pesquisarPessoaPorCpf(cpfPesquisado); 

    //Assert
    strictEqual(pessoa.nome, nomeEsperado);
    strictEqual(pessoa.cpf, cpfEsperado);
    strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada);
    strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada);
  });

  it('Ao informar o CPF de uma pessoa inexistente teremos a mensagem "Pessoa não encontrada"', () => {
    //Arrange
    const cpfPesquisado = '000000000'

    //Act
    const resultado = pesquisarPessoaPorCpf(cpfPesquisado);

    //Assert
    strictEqual(resultado, 'Pessoa não encontrada');
  });
})