USE sakila;
-- ceil -> es para promediar hacia arriba
-- floor -> es para promdediar hacia abajo 
-- ABS es para mostgrar un valor absoluto 
-- SUM(), AVG(), COUNT ()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas'FROM payment; 

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- COUNT () cuenta con las filas de una tabla
SELECT COUNT(*) FROM payment WHERE staff_id=1;

-- Cantidad de clientes distintos 
SELECT COUNT(DISTINCT customer_id) FROM payment; 
-- SUM ()
SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id=2;

-- Cual cliente realizo mas rentas 
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;

-- ¿Quien gasto mas?
SELECT customer_id, SUM(amount) AS Total FROM payment GROUP BY customer_id ORDER BY Total ASC;


-- Group by - agrupa solo si se usa con SUM,AVG, COUNT
-- Order by - ordena segun segun la columna o funcion que le indiquemos ASC /DESC
SELECT * FROM payment GROUP BY stadd_id;
SELECT * FROM payment ORDER BY stadd_id;

-- AVG 
SELECT AVG (amount) AS Promedio FROM payment; 
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;



