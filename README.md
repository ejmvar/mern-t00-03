# Feriados No Laborables

## Implementación

### Back End

Node + Express

* Port: 57018

### Front End

React + redux

### Servidor

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

### Pre carga de datos

Está disponible vía script para update a través del servicio REST

* mongodb/preload.sh

### Producción

Build mediante:


