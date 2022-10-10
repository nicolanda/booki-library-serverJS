

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
{
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