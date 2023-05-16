Plataforma de Cadastro de Empresas

Este projeto consiste em uma plataforma de cadastro de empresas. A aplicação é composta por uma API back-end para cadastro de empresas e um front-end para interação com o usuário.
Funcionalidades

A API back-end possui as seguintes funcionalidades:

    Listagem de todas as empresas cadastradas;
    Detalhamento dos dados de uma empresa pelo ID;
    Cadastro de uma nova empresa;
    Atualização dos dados de uma empresa através do ID;
    Exclusão de uma empresa através do ID.

O front-end permite ao usuário:

    Visualizar a lista de empresas cadastradas em uma tabela com as informações de ID, nome e endereço;
    Visualizar mais detalhes de uma empresa ao clicar no botão "mais detalhes";
    Editar as informações de uma empresa ao clicar no botão "editar";
    Excluir uma empresa ao clicar no botão "apagar";
    Adicionar uma nova empresa no sistema ao clicar no botão "adicionar empresa".

Tecnologias utilizadas

A aplicação utiliza as seguintes tecnologias:

    Back-end: Node.js, Express e MySQL;
    Front-end: React, HTML, CSS e JavaScript.

Como rodar a aplicação

Para rodar a aplicação, é necessário ter o Node.js e o MySQL instalados na máquina.

    Clone o repositório do projeto:

    bash

git clone https://github.com/mayararocha95/cadastrodeempresas.git

Acesse o diretório da API back-end:

cd cadastrodeempresas/backend

Crie um banco de dados MySQL com o nome "database" e configure as credenciais de acesso no arquivo config/database.js.
Instale as dependências da API back-end:

npm install

Inicie a API back-end:

npm start

Acesse o diretório do front-end:

bash

    cd ../frontend

    Configure a URL da API back-end no arquivo js/config.js.
    Abra o arquivo index.html em um navegador para acessar a plataforma.

