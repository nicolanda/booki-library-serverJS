-- drops
drop table if exists lead;
drop table if exists identification_type;
drop table if exists city;
drop table if exists department;
drop table if exists house;
drop table if exists payment;
drop table if exists payment_type;
drop table if exists payment_country;
drop table if exists bill;
drop table if exists bill_status;
drop table if exists bill_delivery;
drop table if exists store;
drop table if exists store_worker;
drop table if exists book;
drop table if exists bk_category;
drop table if exists category;
drop table if exists bk_author;
drop table if exists author;
drop table if exists price_tax;
drop table if exists price_discount;


-- users
create table lead (
    lead_id serial primary key,
    lead_name varchar(255) not null,
    lead_email varchar(255) not null,
    lead_password varchar(255) not null,
    lead_cellphone varchar(255) not null,
    lead_identification_num integer not null,
    identification_type_id integer not null,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);

create table identification_type(
    identification_type_id serial primary key,
    name varchar(255) not null
);

alter table lead 
    add constraint fk_idTypeLead_Lead foreign key (identification_type_id) references identification_type (identification_type_id);

insert into idTypeLead (identification_type_id, name) values 
  (default, 'Cedula de Ciudadania'),
  (default, 'Cedula de Extranjeria'),
  (default, 'ID Pasaporte'),
  (default, 'ID Tarjeta de Identidad'),
  (default, 'Numero de identificación tributaria'),
  (default, 'Permiso Especial de Permanencia');


-- book address

create table addres_book (
  a_bk_id serial primary key,
  a_bk_postal_code varchar(55) not null,
  a_bk_address varchar(55) not null,
  a_bk_lead_id integer not null,
  a_bk_city_id integer not null,
  a_bk_house_id integer not null
);

create table house(
  house_id serial primary key,
  house_name varchar(55) not null
);

create table city (
  city_id serial primary key,
  city_name varchar(55) not null,
  department_id integer not null
);

create table department (
  department_id serial primary key,
  nombre_department varchar(50) unique not null
);

alter table addres_book 
    add constraint fk_lead_addres_book foreign key (a_bk_lead_id) references lead (lead_id);

alter table addres_book 
    add constraint fk_city_addres_book foreign key (a_bk_city_id) references city (city_id);

alter table addres_book 
    add constraint fk_house_addres_book foreign key (a_bk_house_id) references house (house_id);

alter table city 
  add constraint fk_city_department foreign key (department_id) references department (department_id);

insert into department (department_id, nombre_department) values
  (default, 'Amazonas'),
  (default, 'Antioquia'),
  (default, 'Arauca'),
  (default, 'Atlántico'),
  (default, 'Bolívar'),
  (default, 'Boyacá'),
  (default, 'Caldas'),
  (default, 'Caquetá'),
  (default, 'Casanare'),
  (default, 'Cauca'),
  (default, 'Cesar'),
  (default, 'Chocó'),
  (default, 'Córdoba'),
  (default, 'Cundinamarca'),
  (default, 'Guainía'),
  (default, 'Guaviare'),
  (default, 'Huila'),
  (default, 'La Guajira'),
  (default, 'Magdalena'),
  (default, 'Meta'),
  (default, 'Nariño'),
  (default, 'Norte de Santander'),
  (default, 'Putumayo'),
  (default, 'Quindío'),
  (default, 'Risaralda'),
  (default, 'San Andrés y Providencia'),
  (default, 'Santander'),
  (default, 'Sucre'),
  (default, 'Tolima'),
  (default, 'Valle del Cauca'),
  (default, 'Vaupés'),
  (default, 'Vichada');

-- payment

create table payment (
  payment_id serial primary key,
  payment_card_number integer not null,
  payment_month_exp integer not null,
  payment_year_exp integer not null,	
  payment_code_cvc integer not null,
  payment_name varchar(55) not null,
  payment_lastname varchar(55) not null,
  patment_location varchar(55) not null,
  payment_address varchar(55) not null,
  payment_postal_code varchar(55) not null,
  payment_save boolean not null default false,
  payment_lead_id integer not null,
  paymeny_type_id integer not null,
  payment_country_id integer not null
);

-- paises para pago
create table payment_country (
  payment_country_id serial primary key,
  payment_country_name varchar(55) not null
);

-- tipo de pago pse, mastercard, visa etc...
create table payment_type (
  payment_type_id serial primary key,
  payment_type_name varchar(55) not null
);

alter table payment 
  add constraint fk_lead_payment foreign key (payment_lead_id) references lead (lead_id);

alter table payment
  add constraint fk_country_payment foreign key (payment_country_id) references payment_country (payment_country_id);

alter table payment
  add constraint fk_type_payment foreign key (paymeny_type_id) references payment_type (payment_type_id);

-- bill  
create table bill (
  bill_id serial primary key,
  bill_product varchar(55) not null,
  bill_date datetime(4) not null,
  bill_amount integer not null,
  bill_total_price integer not null,
  bill_status_id integer unique not null,
  bill_delivery_id integer not null,
  bill_lead_id integer not null,
  bill_store_id integer not null
);

create table bill_status (
  bill_status_id serial primary key,
  bill_status_name varchar(10) not null
);

create table bill_delivery (
  bill_delivery_id serial primary key,
  bill_delivery_complete boolean not null,
  bill_delivery_notification varchar(100) not null
);

alter table bill
  add constraint fk_status_bill foreign key (bill_status_id) references bill_status (bill_status_id);

alter table bill
  add constraint fk_delivery_bill foreign key (bill_delivery_id) references bill_delivery (bill_delivery_id);

alter table bill
  add constraint fk_lead_bill foreign key (bill_lead_id) references lead (lead_id);

-- libro

create table book (
  book_id serial primary key,
  book_name varchar(55) not null,
  book_isbn varchar(55) not null,
  book_editorial varchar(55) not null,
  book_img varchar(55) not null,
  book_details varchar(55) not null,
  book_language varchar(55) not null,
  book_price number(15,2) not null,
  price_tax_id integer not null,
  book_store_id integer not null,
  price_discount_id integer not null
);

create table price_tax (
  price_tax_id serial primary key,
  price_tax_name varchar(55) not null,
  price_tax_value number(15,2) not null
);

create table price_discount (
  price_discount_id serial primary key,
  price_discount_name varchar(55) not null,
  price_discount_value number(15,2) not null
);

alter table book 
  add constraint fk_tax_book foreign key (price_tax_id) references price_tax (price_tax_id);

alter table book
  add constraint fk_price_book foreign key (price_discount_id) references price_discount (price_discount_id);

create table author (
  author_id serial primary key,
  author_name varchar(55) not null,
  author_lastname varchar(55) not null,
  author_born_date date not null,
  author_nationality varchar(55) not null
);

create table bk_author (
  book_id integer not null,
  author_id integer not null
);

alter table bk_author
  add constraint fl_book_bk_author foreign key (book_id) references book (book_id);

alter table bk_author
  add constraint fl_author_bk_author foreign key (author_id) references author (author_id);

create table category (
  category_id serial primary key,
  category_name varchar(55) not null
);

create table bk_category (
  book_id integer not null,
  category_id integer not null
);

alter table bk_category
  add constraint fl_book_bk_category foreign key (book_id) references book (book_id);

alter table bk_category
  add constraint fl_category_bk_category foreign key (category_id) references category (category_id);
  

-- booki

create table store (
  store_id serial primary key,
  store_name varchar(55) not null,
  store_address varchar(55) not null,
  store_phone varchar(55) not null,
  store_email varchar(55) not null,
  store_nit varchar(55) not null
);

create table store_worker(
  store_worker_id serial primary key,
  store_worker_name varchar(55) not null,
  store_worker_lastname varchar(55) not null,
  store_worker_phone varchar(55) not null,
  store_worker_email varchar(55) not null,
  store_worker_user varchar(55) not null,
  store_worker_password varchar(55) not null,
  store_worker_store_id integer not null
);

alter table store_worker
  add constraint fl_store_store_worker foreign key (store_worker_store_id) references store (store_id);

alter table bill
  add constraint fl_store_bill foreign key (bill_store_id) references store (store_id);

alter table book
  add constraint fl_store_book foreign key (book_store_id) references store (store_id);