/*CREATE DATABASE outdoorsy*/

CREATE TABLE outdoorsy.tuser (
  id_user SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  email    VARCHAR(150),
  description TEXT,
  date_reg TIMESTAMP NULL DEFAULT now(),
  date_mod TIMESTAMP NULL
);