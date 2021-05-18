CREATE DATABASE emloyee_DB;

USE emloyee_DB;

create table department (

id INT NOT Null auto_increment,
name varchar(30),
primary key (id)

)

create table role (
id INT NOT Null auto_increment,
title varchar(30),
salary decimal (10,2),
department_id INT NOT null,
CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(Id),
primary key (id)
)
insert into department (name)
values ("IT"), ("HR")

insert into role (title, salary, department_id)
values ("CEO", 100000.00, 1)

select * from role

 
