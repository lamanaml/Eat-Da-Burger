CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
    id int auto_increment, 
    burger_name varchar,
    devoured boolean default false,
    primary key (id)
    );