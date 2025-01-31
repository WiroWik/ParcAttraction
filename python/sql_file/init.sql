DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
    ratings_id int auto_increment,
    primary key(ratings_id),
    name varchar(255) not null,
    surname varchar(255),
    content varchar(255),
    note int not null,
    attraction_id int not null,
    foreign key(attraction_id) references attraction(attraction_id)
);