<h1 align="center">
    Processo Seletivo Backend Mercafácil
</h1>

# Desafio: API REST

O objetivo deste teste é avaliar seu desempenho em desenvolver uma solução de integração entre sistemas. O problema consiste em receber 1 ou mais contatos de celulares através de uma API Rest e adicioná-los ao banco de dados do cliente Macapá ou do cliente VareJão.

## Requisitos

- Docker
- Docker-compose
- Node e npm

```
$ docker-compose up -d
$ cd api
$ npm install
$ npm run build
$ npm run typeorm -- migration:run
$ npm run typeorm -- migration:run -c dbVarejao
$ npm run typeorm -- migration:run -c dbMacapa
$ npm run start:dev
# Api disponível em: http://localhost:3333
```

## Usuários

```
#Usuário Macapa
username:MacapaUser
password:teste

#Usuário Varejao
username:VarejaoUser
password:teste
```

### Rotas api [InsomniaFile](InsomniaFile.json):

```
# Auth
- Post: '/auth/login'
    Body: {
        "username": "MacapaUser",
	    "password": "teste"
    }

# Contacts
- get: '/contacts'
- Post: '/contacts'
    Body: {
        "file": FILE:contacts.json,
    }

```
