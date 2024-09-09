const { filmes } = require('../data');

const deletarFilmes = (req, res) => {
    const { id } = req.params;
    const index = filmes.findIndex((f) => f.id == id);

    if (index === -1){
        return res.status(404).send('Filmes não encontrado!');
    }

    const filmeDeletado = filmes.splice(index, 1)[0];

    res.status(200).send({ message: 'Filme deletado com sucesso!', filme:filmeDeletado})
}

module.exports = deletarFilmes;