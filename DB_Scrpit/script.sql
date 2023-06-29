create database db_diaadia;
use db_diaadia;
create table tbUser(
    id int auto_increment primary key not null,
    userName varchar(20) not null ,
    name varchar(60) not null ,
    lastName varchar(60) not null ,
    email varchar(60) not null ,
    password varchar(60) not null,
    tipeClient  int not null comment '1:Cliente, 2:Médico, 3:Clinica'

);
create table tbPacient(
    id int primary key,
    tipeDiabets tinyint not null  comment '1: Diabetes tipe 1,2: Diabetes tipe 2, 3: Diabetes tipe 3(gestacional)',
    medicoId int not null,
    clinicaId int not null,
    measureGlicToday date not null ,
    measureHours datetime not null,
    entreyApp datetime not null,
    constraint fk_user foreign key (id) references tbUser(id)
);
create table medic(
    id int primary key,
    
)

