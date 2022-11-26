# Arquitectura de una aplicación de node.js
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

_Este es un proyecto de e-commerce que cuenta con dos partes, en este repositorio se centra principalemente en la consturcción del back-end, utilizando princiapal javascript, postgreSql, node-express.
Pare ver la parte del cliente darle click al siguiente enlance: [Booki Client](https://github.com/nicolanda/booki-library-client)_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_los progrmaas necesarios para poder hacer uso de este proyecto son:_

* [Node](https://nodejs.org/es/docs/)       - Entorno de desarrollo para JavaScript
* [Express](https://expressjs.com/)         - Framework web para node.js
* [Sequelize](https://sequelize.org/)       - ORM para node.js
* [Npm](https://www.npmjs.com/)             - Manejador de dependencias
* [PostgreSQL](https://www.postgresql.org/) - Base de datos
* [Git](https://git-scm.com/)               - Sistema de control de versiones

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Node](https://nodejs.org/es/docs/)       - Entorno de desarrollo para JavaScript
* [Express](https://expressjs.com/)         - Framework web para node.js
* [Sequelize](https://sequelize.org/)       - ORM para node.js
* [Npm](https://www.npmjs.com/)             - Manejador de dependencias
* [PostgreSQL](https://www.postgresql.org/) - Base de datos
* [Git](https://git-scm.com/)               - Sistema de control de versiones

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](https://semver.org/lang/es/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Kronomus/estructura-node-basic.git).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Nicolas Landazabal** - *Desarrollador, gestor del proyecto* - [nicolanda](https://github.com/nicolanda)
* **Luis Felipe Villamizar Torres** - *Auditor del proyecto* - [Kronomus](https://github.com/Kronomus)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Copyright (c) 2022, Nicolas Landazabal <nicolaslandazabal@hotmail.com>

Se concede por la presente el permiso para usar, copiar, modificar y/o 
distribuir este software para cualquier propósito con o sin cargo, 
siempre y cuando el aviso de copyright anterior y este aviso de permiso 
aparezcan en todas las copias.

EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y EL AUTOR RECHAZA TODAS LAS 
GARANTÍAS CON RESPECTO A ESTE SOFTWARE, INCLUIDAS TODAS LAS GARANTÍAS 
IMPLÍCITAS DE COMERCIABILIDAD Y ADECUACIÓN. EN NINGÚN CASO EL AUTOR SERÁ 
RESPONSABLE POR CUALQUIER DAÑO ESPECIAL, DIRECTO, INDIRECTO O CONSECUENTE, 
O CUALQUIER DAÑO QUE RESULTE DE LA PÉRDIDA DE USO, DATOS O BENEFICIOS, YA 
SEA EN UNA ACCIÓN DE CONTRATO, NEGLIGENCIA U OTRA ACCIÓN EXTRACONTRACTUAL
QUE SURJA DE O EN CONEXIÓN CON EL USO O RENDIMIENTO DE ESTE SOFTWARE.

## Expresiones de Gratitud 🎁

* Agradecimiento a [Villanuevand](https://github.com/Villanuevand) por la adecuacion y traduccion al español del documento README.md



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
  Nit = 'Numero de identificación tributaria',

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