const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const criarFilmes = require('./filmes/criarFilmes');
app.post('/filmes', criarFilmes);

const lerFilmes = require('./filmes/lerFilmes');
app.get('/filmes', lerFilmes);

const atualizarFilmes = require('./filmes/atualizarFilmes');
app.put('/filmes/:id', atualizarFilmes);

const deletarFilmes = require('./filmes/deletarFilmes');
app.delete('/filmes/:id', deletarFilmes);

const buscarFilmes = require('./filmes/buscarFilmes');
app.get('/filmes/busca', buscarFilmes);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
