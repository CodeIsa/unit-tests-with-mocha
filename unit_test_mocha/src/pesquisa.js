function pesquisarPessoaPorCpf(cpf) {
  const pessoas = [
    {
      nome: 'Isabelle',
      cpf: '123.456.789-00',
      frutasFavoritas: ['uva', 'manga']
    },
    {
      nome: 'Jonatas',
      cpf: '123.456.789-01',
      frutasFavoritas: ['goiaba', 'manga']
    }

  ];

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].cpf === cpf) {
      return pessoas[i];
    }
  }
  return 'Pessoa não encontrada';
}

module.exports = {
  pesquisarPessoaPorCpf
}