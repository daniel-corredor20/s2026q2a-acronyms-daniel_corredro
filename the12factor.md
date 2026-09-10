# Selection of 12-Factor App Principles

### 1. Codebase (Un código fuente, varios despliegues)
Un único repositorio rastreado en control de versiones (Git) nos permite desplegar la misma base de código en múltiples entornos (dev, staging, prod) garantizando trazabilidad y evitando desincronizaciones entre desarrolladores.

### 2. Dependencies (Dependencias explícitas e aisladas)
Aislamos las dependencias mediante contenedores (Docker) y declaramos explícitamente los paquetes necesarios en archivos de configuración. Esto asegura que la aplicación se ejecute exactamente igual en la máquina local de cualquier desarrollador y en el entorno de producción.

### 3. Config (Configuración guardada en el entorno)
Separar estrictamente la configuración (claves, URIs de bases de datos, credenciales) del código fuente y manejarla mediante variables de entorno nos da la flexibilidad de desplegar en diferentes entornos sin alterar el código y garantizando la seguridad de la información sensible.

### 4. Dev/Prod Parity (Mapeo entre desarrollo y producción)
Mantener los entornos de desarrollo y producción lo más similares posible minimiza fallos imprevistos en despliegues. Al usar las mismas herramientas de contenedores y servicios en local que en servidor, reducimos drásticamente los sesgos de "en mi máquina sí funciona".
