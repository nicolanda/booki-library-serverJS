# Arquitectura de una aplicaci贸n de node.js
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

_Este es un proyecto de e-commerce que cuenta con dos partes, en este repositorio se centra principalemente en la consturcci贸n del back-end, utilizando princiapal javascript, postgreSql, node-express.
Pare ver la parte del cliente darle click al siguiente enlance: [Booki Client](https://github.com/nicolanda/booki-library-client)_

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 馃搵

_los progrmaas necesarios para poder hacer uso de este proyecto son:_

* [Node](https://nodejs.org/es/docs/)       - Entorno de desarrollo para JavaScript
* [Express](https://expressjs.com/)         - Framework web para node.js
* [Sequelize](https://sequelize.org/)       - ORM para node.js
* [Npm](https://www.npmjs.com/)             - Manejador de dependencias
* [PostgreSQL](https://www.postgresql.org/) - Base de datos
* [Git](https://git-scm.com/)               - Sistema de control de versiones

### Instalaci贸n 馃敡

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_D铆 c贸mo ser谩 ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de c贸mo obtener datos del sistema o como usarlos para una peque帽a demo_

## Ejecutando las pruebas 鈿欙笍

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 馃敥

_Explica que verifican estas pruebas y por qu茅_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificaci贸n 鈱笍

_Explica que verifican estas pruebas y por qu茅_

```
Da un ejemplo
```

## Despliegue 馃摝

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 馃洜锔?

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Node](https://nodejs.org/es/docs/)       - Entorno de desarrollo para JavaScript
* [Express](https://expressjs.com/)         - Framework web para node.js
* [Sequelize](https://sequelize.org/)       - ORM para node.js
* [Npm](https://www.npmjs.com/)             - Manejador de dependencias
* [PostgreSQL](https://www.postgresql.org/) - Base de datos
* [Git](https://git-scm.com/)               - Sistema de control de versiones

## Contribuyendo 馃枃锔?

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro c贸digo de conducta, y el proceso para enviarnos pull requests.

## Wiki 馃摉

Puedes encontrar mucho m谩s de c贸mo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 馃搶

Usamos [SemVer](https://semver.org/lang/es/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Kronomus/estructura-node-basic.git).

## Autores 鉁掞笍

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Nicolas Landazabal** - *Desarrollador, gestor del proyecto* - [nicolanda](https://github.com/nicolanda)
* **Luis Felipe Villamizar Torres** - *Auditor del proyecto* - [Kronomus](https://github.com/Kronomus)

Tambi茅n puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) qu铆enes han participado en este proyecto.

## Licencia 馃搫

Copyright (c) 2022, Nicolas Landazabal <nicolaslandazabal@hotmail.com>

Se concede por la presente el permiso para usar, copiar, modificar y/o 
distribuir este software para cualquier prop贸sito con o sin cargo, 
siempre y cuando el aviso de copyright anterior y este aviso de permiso 
aparezcan en todas las copias.

EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y EL AUTOR RECHAZA TODAS LAS 
GARANT脥AS CON RESPECTO A ESTE SOFTWARE, INCLUIDAS TODAS LAS GARANT脥AS 
IMPL脥CITAS DE COMERCIABILIDAD Y ADECUACI脫N. EN NING脷N CASO EL AUTOR SER脕 
RESPONSABLE POR CUALQUIER DA脩O ESPECIAL, DIRECTO, INDIRECTO O CONSECUENTE, 
O CUALQUIER DA脩O QUE RESULTE DE LA P脡RDIDA DE USO, DATOS O BENEFICIOS, YA 
SEA EN UNA ACCI脫N DE CONTRATO, NEGLIGENCIA U OTRA ACCI脫N EXTRACONTRACTUAL
QUE SURJA DE O EN CONEXI脫N CON EL USO O RENDIMIENTO DE ESTE SOFTWARE.

## Expresiones de Gratitud 馃巵

* Agradecimiento a [Villanuevand](https://github.com/Villanuevand) por la adecuacion y traduccion al espa帽ol del documento README.md



---
fwfew


#### Rutas tabalas


lead

url: api/lead

get: api/lead
get: api/lead/:id
post: api/lead
put: api/lead/:id
delete: api/lead/:id

json:
{
  "id": auto
  "name": "",
  "email": "",
  "password": "",
  "cellphone": "",
  "identificationNum": 221323,
  "token": "",
  "confirmed" false
}


url: api/identificationType

@table
  Cedula = 'Cedula de Ciudadania',
  CedulaExtranjeria = 'Cedula de Extranjeria',
  Pasaporte = 'Pasaporte',
  TarjetaIdentidad = 'Tarjeta de Identidad',
  Nit = 'Numero de identificaci贸n tributaria',

json: 
{
  "name": @table
}


### adress_book

city

url: api/city

table 
json 
{
  "name": "",
  "department_id": ""
}

department

url: api/department
 get post 
 getOne put delete -> /:id
 
@table 
json 
  "name": ""
}

house 

url: api/house
 get post 
 getOne put delete -> /:id

@table
json 
{
  "name": "",
}