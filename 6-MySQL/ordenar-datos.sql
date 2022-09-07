USE world;

SELECT * FROM country;

SELECT name, Population FROM country ORDER BY Population DESC;

SELECT NAME, Population FROM COUNTRY WHERE name='Mexico';

SELECT * FROM COUNTRY WHERE name='Mexico';

SELECT 5 + 5;
-- ALIAS
SELECT name AS Nombre_de_pais, Population AS Poblacion_del_pais FROM country ORDER BY Poblacion_del_pais  ;

-- DISTINCT filtra los datos repetidos 
SELECT DISTINCT Continent FROM country;

-- WHERE Clausula 
-- < > <= >= != =

SELECT * FROM country WHERE LifeExpectancy <50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America'  ORDER BY Continent ASC;

-- BETWEEN
-- Muestra rango de que estra entre esos 2 pareametros 
SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000;

-- OR / AND / != operadores logicos 
SELECT * FROM country WHERE Continent = 'Asia' OR Continent ='Europe';

-- LIKE sirve para buscar un patron en especifico 
-- % sirve para buscar cualquier cantidad de caracteres
-- ' _ ' especificamos un caracter 
SELECT name FROM country WHERE Name LIKE '%and%';
SELECT name FROM country WHERE Name LIKE '%e_a';
SELECT name FROM country WHERE Continent LIKE 'asia';

-- operador IN 
SELECT * FROM country WHERE Continent NOT IN('Asia','Europe','North America') ORDER BY Continent;
