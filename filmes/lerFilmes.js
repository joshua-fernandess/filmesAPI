const { filmes } = require('../data');

const lerFilmes = (req, res) => {
    res.status(200).send(filmes);
};

module.exports = lerFilmes;