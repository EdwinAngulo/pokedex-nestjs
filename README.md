<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar repositorio.

2. Ejecutar.

```bash
  yarn install
```

3. Tener Nest CLI instalado.

```bash
  npm i -g @nestjs/cli
```

4. Levantar la base de datos (Compose V2).

```bash
  docker compose up -d
```

5. Copiar el archivo ```.env.example``` y renombrarlo a ```.env```.

6. Llenar las variables de entorno del archivo ```.env```.

7. Ejecutar la aplicación en modo desarrollo.

```bash
  yarn start:dev
```

8. Reconstruir la base de datos con la semilla.
  
```bash
  http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest

# Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
