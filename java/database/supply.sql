CREATE DATABASE supply;
USE supply;
DROP DATABASE supply;

CREATE TABLE client(
	idclient INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)NOT NULL,
	email VARCHAR(50)NOT NULL UNIQUE
);
CREATE TABLE route(
	idroute INT PRIMARY KEY AUTO_INCREMENT,
	country VARCHAR(10)NOT NULL,
	estate VARCHAR(30)NOT NULL,
	city VARCHAR(30)NOT NULL,
	idcli INT,
	FOREIGN KEY(idcli) REFERENCES client(idclient)
);
CREATE TABLE product(
	idproduct INT PRIMARY KEY AUTO_INCREMENT,
	item VARCHAR(50)NOT NULL,
	price DOUBLE(100,2)NOT NULL,
	quantity INT(250)NOT NULL,
	idcli INT,
	FOREIGN KEY(idcli) REFERENCES client(idclient)
);

DROP TABLE client;
DROP TABLE route;
DROP TABLE product;

/*até o dia 20 mega query com mais de 500 inserts e construção de CRUD sql*/
INSERT INTO client VALUES(NULL,'mercado bahia norte','irmaosrodrigues@gmail.com');
INSERT INTO client VALUES(NULL,'supermercado andrade','valmirandrade@gmail.com');
INSERT INTO client VALUES(NULL,'mercadinho noruega','val1234@gmail.com');
INSERT INTO client VALUES(NULL,'supermercado fort','irmaosgutierrez@gmail.com');

INSERT INTO route VALUES(NULL,'brazil','bahia','salvador',1);
INSERT INTO route VALUES(NULL,'brazil','bahia','salvador',2);
INSERT INTO route VALUES(NULL,'brazil','bahia','salvador',3);
INSERT INTO route VALUES(NULL,'brazil','bahia','salvador',4);

INSERT INTO product VALUES(NULL,'néctar maratá 200 ml',0.79,150,1);
INSERT INTO product VALUES(NULL,'arroz urbano parboilizado',2.65,50,2);
INSERT INTO product VALUES(NULL,'açúcar demerara',3.79,10,3);
INSERT INTO product VALUES(NULL,'leite betânia integral 1l',1.97,200,4);

SELECT * FROM client;
SELECT * FROM route;
SELECT * FROM product;



SELECT c.name, c.email, r.country, r.estate, r.city
FROM client c
INNER JOIN route r
ON c.idclient = r.idcli;


CREATE VIEW  vselecao  AS
SELECT c.name, c.email, r.country, r.estate, r.city
FROM client c
INNER JOIN route r
ON c.idclient = r.idcli
WHERE c.email = 'irmaosrodrigues@gmail.com';

SELECT * FROM vselecao;

/*insira todo este bloco*/
DELIMITER $$
CREATE PROCEDURE varejo()
BEGIN
	SELECT c.name, c.email, r.country, r.estate, r.city, p.item, p.price, p.quantity
	FROM client c
	INNER JOIN route r
	ON c.idclient = r.idcli
	INNER JOIN product p
	ON c.idclient = p.idcli;
END $$
/*insira todo este bloco*/

DELIMITER ;

CALL varejo();


