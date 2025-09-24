Todo-Backend2

Este projeto é uma API de gerenciamento de tarefas (to-do list) construída com NestJS, um framework progressivo para a criação de aplicações do lado do servidor Node.js. A aplicação se conecta a um banco de dados MySQL para persistência dos dados.

Tecnologias Utilizadas
O desenvolvimento deste projeto utilizou as seguintes tecnologias e ferramentas:

NestJS: Framework Node.js para a construção de APIs eficientes e escaláveis.

TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript, utilizada em todo o projeto para maior segurança e clareza do código.

TypeORM: Um ORM (Mapeamento Objeto-Relacional) para Node.js, utilizado para facilitar a comunicação com o banco de dados.

MySQL: O sistema de gerenciamento de banco de dados relacional que armazena as informações das tarefas e dos usuários.

Migrations: Scripts do TypeORM usados para gerenciar as alterações no esquema do banco de dados, garantindo que as tabelas necessárias (tasks e users) sejam criadas e atualizadas corretamente.

Funcionalidades
A API permite as seguintes operações:

CRUD de Tarefas: Criar, ler, atualizar e deletar tarefas.

Autenticação: Gerenciamento de usuários.

Relacionamento: As tarefas estão relacionadas aos usuários que as criaram.

Como Rodar o Projeto
Clone o repositório.

Instale as dependências com npm install.

Crie o arquivo de configuração do banco de dados (src/data-source.ts).

Execute as migrations para criar as tabelas no banco de dados com npx typeorm-ts-node-commonjs migration:run --dataSource ./src/data-source.ts.

Inicie a aplicação com npm run start:dev.

Criadores do Projeto
Este projeto foi desenvolvido por:

Iasmin

Giovana Miguel