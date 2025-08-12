const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/database');
const clienteRoutes = require('./src/routes/clienteRoutes');
const Cliente = require('./src/models/clienteModel');

const app = express();
app.use(bodyParser.json());

app.use('/clientes', clienteRoutes);

sequelize.sync().then(() => {
    console.log('Banco sincronizado.');
    app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
});
