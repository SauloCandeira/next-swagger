## Infraestructure
First, run the create image and container:

```bash
    docker build -t next-basi ./
    docker run -p 3000:3000 next-basic 
```

## Design system
Second, install dependencies for design pattern:

```bash
    npx sb init
    npm i styled-components
    npm i --save-dev @types/styled-components
    npm i react-icons
```

## Database and API
Third, config the database and create API:

```bash
    npm i pg
    npm i --save-dev @types/pg
```

## Docs
Fourth, write documentation:

```bash
    npm i next-swagger-doc
    npm i swagger-ui-react
    npm i --save-dev @types/swagger-ui-react
```

## Getting started
Fifth, run the app:

```bash
    npm run dev
    npm run storybook
```

## Fonte

Nextjs PostgreSQL Typescript CRUD (REST API & Frontend) <https://www.youtube.com/watch?v=fle43mKDLSI>
NEXT.JS: CRIANDO E CONSUMINDO APIs [PARTE #06] <https://www.youtube.com/watch?v=3Eam3ogU-uk&t=310s>
Escrevendo um arquivo swagger.json <https://dev.to/ziishaned/getting-started-with-swagger-3bbc>
OpenAPI-Specification <https://github.com/OAI/OpenAPI-Specification/tree/main/examples/v2.0/json>