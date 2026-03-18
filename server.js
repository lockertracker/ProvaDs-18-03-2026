const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Libera o acesso para o seu HTML
app.use(express.json());

// Gerador de números aleatórios
const getStats = () => ({
    cpu: Math.floor(Math.random() * 100),
    ram: Math.floor(Math.random() * 100),
    temp: Math.floor(Math.random() * 50) + 40 // Mantém entre 40°C e 90°C
});

// Rota principal (Evita o erro de "not found")
app.get('/', (req, res) => {
    res.send('Servidor Online! Acesse o index.html para ver o dashboard.');
});

// Rota de Dados
app.get('/api/stats', (req, res) => {
    res.json(getStats());
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📊 Dados em http://localhost:${PORT}/api/stats`);
});