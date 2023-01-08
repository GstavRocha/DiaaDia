create table tbClient
(
    idConta       int auto_increment
        primary key,
    login         varchar(20) not null,
    senha         varchar(40) not null,
    nome          varchar(60) not null,
    email         varchar(60) not null,
    weight        int         not null,
    age           int         not null,
    tipe_diabetes tinyint     not null
);

create table tbMeasure_daily
(
    idConta        int      not null
        primary key,
    meas_Gly_today date     not null,
    hours_meas     datetime not null,
    entry_app      datetime not null,
    constraint fk_idConta
        foreign key (idConta) references tbClient (idConta)
);


