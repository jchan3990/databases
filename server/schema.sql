CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL primary key auto_increment,
  user INT,
  content varchar(255),
  time_created varchar(255)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT Null primary key auto_increment,
  name varchar(255)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

