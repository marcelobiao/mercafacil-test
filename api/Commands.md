### Comandos Úteis

#### Criando uma migration no projeto
```bash

npm run typeorm migration:create -- -n createTagTable
```

Para executar a migration `migration:run` é necessário estar dentro do container do docker referente a API.

- Entrando dentro do bash do servidor Node.js
  ```bash
  docker exec -it keep_api bash
  ```

- Executando a migration
  ```bash
  npm run typeorm migration:run
  ```
