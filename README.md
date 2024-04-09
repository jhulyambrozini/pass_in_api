# PASS IN SERVER
Este projeto foi feito durante a NLW Unite da Rocketseat na trilha com foco em back end com Node.js

Ele consiste em uma API para eventos, que possui as rotas HTTP de:
- Criar um evento (POST: /events)
- Buscar por um evento específico (GET: /events/:eventId)
- Registrar um participante (POST: /events/:eventId/attendees)
- Buscar por dados de um participante (GET /attendees/:attendeeId/badge)
- Realizar o checkin de um participante (GET: /attendees/:attendeeId/check-in)
- Buscar por todos os participantes de um evento (GET: /events/:eventId/attendee)

## Tecnologias usadas
- **Node.js**:
Um ambiente de tempo de execução JavaScript que permite aos desenvolvedores executar código JavaScript no lado do servidor. Node.js é conhecido por sua escalabilidade e eficiência, sendo amplamente utilizado para construir aplicativos da web e APIs.

- **Fastify**:
Um framework web leve e eficiente para Node.js, projetado para lidar com uma grande carga de solicitações de forma rápida e eficiente. Fastify é conhecido por sua velocidade de execução e baixa sobrecarga, tornando-o uma escolha popular para a construção de APIs de alto desempenho.

- **TypeScript**:
Uma linguagem de programação de código aberto que é uma superset da linguagem JavaScript. TypeScript adiciona tipagem estática opcional e outros recursos avançados para ajudar os desenvolvedores a escreverem código mais seguro e escalável.

- **Prisma**:
Uma ferramenta de ORM (Object-Relational Mapping) para Node.js e TypeScript, que simplifica a interação com bancos de dados relacionais. Prisma oferece uma API de consulta tipo-safe e gera código automaticamente com base no modelo de dados definido pelo desenvolvedor.

- **SQLite**:
SQLite é um sistema de gerenciamento de banco de dados relacional que opera de forma embutida em aplicativos. Diferente dos tradicionais bancos de dados cliente-servidor, o SQLite é uma biblioteca que oferece uma base de dados SQL completa em um único arquivo.

- **Faker JS**:
Faker.js é uma biblioteca JavaScript utilizada para gerar dados fictícios de forma realista. Esses dados incluem nomes, endereços, números de telefone, e-mails, textos aleatórios e muito mais. É frequentemente utilizado em testes de software, prototipagem de aplicativos e preenchimento de bases de dados de desenvolvimento.

- **Zod**:
Uma biblioteca de validação de esquema TypeScript que permite aos desenvolvedores definir e validar esquemas de dados de forma segura e eficiente. Zod utiliza o sistema de tipos do TypeScript para garantir a integridade dos dados em tempo de compilação.

- **Fasify Swagger UI**:
Fastify Swagger UI é uma extensão do Fastify, projetado para ser extremamente eficiente e de baixa sobrecarga. Ele facilita a documentação e a visualização das APIs construídas com o Fastify, integrando automaticamente uma interface de usuário interativa baseada em Swagger para visualizar e testar suas APIs. Essa interface de usuário permite que os desenvolvedores vejam detalhes sobre os endpoints da API, parâmetros de solicitação, respostas esperadas e outros metadados importantes, tudo em um formato fácil de entender.

## Execução
- 1 Dá um fork neste repositório
- 2 Clone ou baixe o seu repositório fork
- 3 Abra seu terminal e navegue até a pasta do projeto
- 4 Rode o commando `npm i` ou `npm install` para baixar as dependências
- 7 Rode o commando `npm run dev` para iniciar a API em modo de desenvolvimmento
