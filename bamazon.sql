DROP DATABASE IF EXISTS
bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE product (
    ID INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    price DECIMAL(13, 4) NOT NULL,
    stock INT(10),
    PRIMARY KEY (ID)
);

INSERT INTO product (item_name, department, price, stock)
VALUES
('PlayStation', 'Video Games', 399.99, 15),
('Xbox', 'Video Games', 499.99, 10),
('Nintendo', 'Video Games', 299.99, 5),
('Green Nike Hat', 'Clothing', 14.99, 25),
('Blue Nike Hat', 'Clothing', 14.99, 15),
('Purple Nike Hat', 'Clothing', 14.99, 25),
('Black Nike Hat', 'Clothing', 14.99, 35),
('Rocking Chair', 'Furniture', 149.95, 5),
('Corner Sofa', 'Furniture', 799.99, 3),
('Bananas', 'Food', 0.99, 9001);