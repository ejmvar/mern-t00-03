# Feriados No Laborables

## Puesta en marcha

Se detallan estos pasos en cada uno de los puntos correspondientes

* Iniciar mongodb
    ``` sh
    cd mongodb && docker-cmpose up -d
    ```
* Iniciar servidor REST
    > seguir las instruccines del proyecto back
    ``` sh
    cd ${BACKEND} && yarn && yarn start
    ```
* Iniciar frontend
    > en esta carpeta
    ``` sh
    yarn && yarn start
    ```
* Abrir la URL del front
    ``` sh
    exo-open http://localhost:3000
    ```
    * El lanzador depende del Sistema Operativo y sus utilizades
    * La url puede variar, según los servicios y aplicaciones que estén en ejecucuón en su entorno

* NOTA:
Actualmente, el acceso al servicio REST está hardcoded en *api.js*, como *UrlBase*

> *Mejoras*: puede llevarse a una envvar para ser tomado en el entorno de implantación


## Implementación

### Servidor MongoDB

* MongoDB
* Port: 57017

Se utilizan imágenes docker preexistentes

Para iniciar el servicio:

``` sh
cd mongodb
docker-compose up -d
```

La interface web (mongo-express) está disponible vía web

* Port: 57018

### Back End

Node + Express

Para ejecutar el servidor REST, desde el proyecto correspondiente:

``` sh
node index.js
```

* Port: 57018

### Front End

React + redux

Para ejecutar el servidor REST, desde el proyecto correspondiente:

``` sh
node index.js
```

### Pre carga de datos

Está disponible vía script para update a través del servicio REST

* mongodb/preload.sh

### Producción

Build mediante:

``` sh
yarn build
```

## Docker

Para generar una imagen docker del front, existe un rchivo Dockerfile

``` sh
docker build -t node-app .
```

Luego, para iniciar el conjunto mongodb+Rest+Front:

``` sh
docker compose up -d
```

Para verificar el funcionamiento, puede iniciar interactivo:

``` sh
docker compose up 
```

o presentar los logs de los contenedores:

``` sh
docker tail -f ${containerName}
```

## Observaciones

El desarrollo debe mejorarse mediante:

* ".env" : para centralizar las configuraciones
* Monorepo : para sincronizar Back y Front
