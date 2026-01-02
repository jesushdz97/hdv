# HDV

## Desarrollo con Docker (Vite + npm)

Prerequisitos: Docker Desktop con Compose v2 y puerto 5173 libre.

### Arranque rápido
1. Ejecuta `npm run docker:dev`.
2. Abre http://localhost:5173.

### Notas
- El código se monta en `/app` para hot reload; dependencias viven en el volumen `hdv_node_modules`.
- El contenedor usa Node 18 y variables `CHOKIDAR_USEPOLLING=true` y `WATCHPACK_POLLING=true` para file-watching en Windows.
- Detener: `docker compose -f docker-compose.dev.yml down`.
- Limpiar dependencias: `docker volume rm hdv_node_modules`.
