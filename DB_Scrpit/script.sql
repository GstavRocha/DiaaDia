create table tbUser
(
    id         int auto_increment
        primary key,
    userName   varchar(20) not null,
    name       varchar(60) not null,
    lastName   varchar(60) not null,
    email      varchar(60) not null,
    password   varchar(60) not null,
    tipeClient int         not null comment '1:Cliente, 2:Médico, 3:Clinica'
);

create table tbMedico
(
    id                  int auto_increment
        primary key,
    idUser              int         not null,
    specialty           varchar(60) not null,
    healthInsurance     varchar(60) not null,
    numberMedicalAdvice int         not null,
    cpf                 int         not null,
    tipeClient          int         not null,
    constraint fkUser
        foreign key (idUser) references tbUser (id)
);

create table tbClinica
(
    id                int auto_increment
        primary key,
    idUser            int         not null,
    idMedic           int         not null,
    company           varchar(80) not null,
    address           varchar(60) not null,
    tipeClient        int         not null,
    cnpjOrEin         int         not null,
    owner             int         not null,
    associatedMedical varchar(60) null,
    constraint fkMedicClinic
        foreign key (idMedic) references tbMedico (id),
    constraint fkUserClinic
        foreign key (idUser) references tbUser (id)
);

create table tbPacient
(
    id               int      not null
        primary key,
    idPacient        int      not null,
    tipeDiabets      tinyint  not null comment '1: Diabetes tipe 1,2: Diabetes tipe 2, 3: Diabetes tipe 3(gestacional)',
    medicoId         int      not null,
    clinicaId        int      not null,
    measureGlicToday date     not null,
    measureHours     datetime not null,
    entreyApp        datetime not null,
    constraint fk_user
        foreign key (id) references tbUser (id)
);

