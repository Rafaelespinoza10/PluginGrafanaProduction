# Production and Jph Plugin

Este plugin de Grafana permite la creación de tarjetas (cards) que muestran la producción hora por hora, facilitando el monitoreo y análisis de datos de producción.

## Instalación

### Prerequisitos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)

### Instrucciones para Desarrollo

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
  ```

2. Instalacion de las dependencias del proyecto
  ``` bash
   npm install 
   ```

3. Correr el proyecto en modo desarrollo 
``` bash
    npm run dev  
 ```

4. Correr el docker para el entorno
``` bash
docker compose up  -d
```


### Funcionamiento

1. Una vez que el plugin este instalado, ve a grafana y selecciona el plugin llamado Production and Jph Plugin
2. Registra los siguientes datos: 
    - Centro de trabajo: Especifica el centro de trabajo correspondiente.
    - Produccion estandar: Ingresa el valor de la produccion estandar.
    - JPH estandar: Ingresa el valor de JPH estandar 
3. Para obtener la produccion y el JPH, ingresa las consultas necesarias para el centro de trabajo utilizando InfluxDB. Asegurate de que las consultas sean configuradas correctamente.



## Consideraciones

1. Agregar la consulta correspondiente para el valor de **Producción** en la **Serie A**.
2. Agregar la consulta correspondiente para el valor de **JPH** en la **Serie B**.
3. Asegurarse de que los datos estén ordenados de forma descendente (el valor actual debe ser el último de la lista).
