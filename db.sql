DROP DATABASE IF EXISTS myweb;
CREATE DATABASE myweb;
use myweb;

-- create tables

CREATE TABLE products (
  product_id INT  PRIMARY KEY ,
  product_name VARCHAR (255) NOT NULL,
  description VARCHAR (255) NOT NULL,
  img_url varchar (255) NOT NULL,
  list_price DECIMAL (10, 2) NOT NULL
);

INSERT products VALUE (1,'p1','abc','/images/p1.jpeg',123);
INSERT products VALUE (2,'p2','oamf','/images/p2.jpeg',142);
INSERT products VALUE (3,'p3','anur','/images/p3.jpeg',19);
INSERT products VALUE (4,'p4','eurmf','/images/p4.jpeg',13);

