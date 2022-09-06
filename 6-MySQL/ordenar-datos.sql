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
