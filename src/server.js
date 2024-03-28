const express = require('express');
const path = require('path');

const app = express();

// Middleware para redirecionar solicitações HTTP para HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

// Configuração do servidor Express

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define a rota para a página inicial
app.get('/home', (req, res) => {
  // Renderize o arquivo HTML que contém o aplicativo React
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a porta e inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
