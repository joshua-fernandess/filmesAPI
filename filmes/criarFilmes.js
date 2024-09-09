const { filmes } = require('../data');

function criarFilmes(req, res){
    const novoFilme = {
        id: filmes.length + 1,
        nome: req.body.titulo,
        diretor: req.body.diretor,
        ano: req.body.ano,
        genero: req.body.genero
    };
    filmes.push(novoFilme);
    res.status(201).send({ message: 'Filme adicionado com sucesso!', filme:novoFilme});
}

module.exports = criarFilmes;