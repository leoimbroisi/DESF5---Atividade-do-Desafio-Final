# DESF5---Atividade-do-Desafio-Final
1. Criar a pasta do projeto

    mkdir projeto-api
    cd projeto-api

2. Inicializar o projeto Node

    npm init -y


3. Instalar dependências

    npm install express sqlite3 sequelize body-parser

4. Criar a estrutura de pastas

    mkdir src
    mkdir src/config src/models src/services src/controllers src/routes

5. Iniciar o servidor

    node server.js

6. Testar a API

    Banco sincronizado.
    Servidor rodando em http://localhost:3000


Você pode testar com Postman, Insomnia ou até mesmo curl:

Criar cliente:
    curl -X POST http://localhost:3000/clientes \
    -H "Content-Type: application/json" \
    -d '{"nome":"Leonardo","email":"leo@email.com"}'

Listar todos:
    curl http://localhost:3000/clientes

Buscar por ID:
    curl http://localhost:3000/clientes/1

Buscar por nome:
    curl http://localhost:3000/clientes/nome/Leonardo

Contar clientes:
    curl -X PUT http://localhost:3000/clientes/1 \
    -H "Content-Type: application/json" \
    -d '{"nome":"Leo Mesquita"}'

Deletar cliente:
    curl -X DELETE http://localhost:3000/clientes/1






