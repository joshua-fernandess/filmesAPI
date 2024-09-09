const { filmes } = require('../data');

const atualizarFilmes = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;
    const novoDiretor = req.body.diretor;
    const novoAno = req.body.ano;
    const novoGenero = req.body.genero;

    const filme = filmes.find((f) => f.id == id);

    if(!filme){
        return res.status(404).send({ message: 'Filme não encontrado'});
    }

    filme.titulo = novoTitulo;
    filme.diretor = novoDiretor;
    filme.ano = novoAno;
    filme.genero = novoGenero;
    
    res.status(200).send({
        message: 'Filme atualizado com sucesso!', filme:filme
    });

}

module.exports = atualizarFilmes;