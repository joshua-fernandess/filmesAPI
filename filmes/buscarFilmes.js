const { filmes } = require('../data');

const buscarFilmes = (req, res) => {
    const { ano } = req.query;
    const resultados = filmes.filter(filme => filme.ano == ano);

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum filme encontrado com esse ano.' });
    }
    
    res.status(200).send(resultados);
}

module.exports = buscarFilmes;
