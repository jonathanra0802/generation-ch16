USE tienda; 
INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (8, '2022-09-07', 150.333, 4);
select * from compra; 

-- INNER JOIN
-- Explicita
SELECT * 
FROM clientes 
INNER JOIN compra
ON clientes.client_id = compra.cliente_id;

SELECT 
clientes.client_id AS 'Numero de cliente', 
clientes.nombre AS 'Nombre', 
compra.fecha_compra
FROM clientes 
INNER JOIN compra
ON clientes.client_id = compra.cliente_id;

-- Union implicita
SELECT * 
FROM clientes, compra
WHERE clientes.client_id = compra.cliente_id;

-- LEFT JOIN 
SELECT * 
FROM clientes 
LEFT JOIN compra
ON clientes.client_id=compra.cliente_id;

-- RIGHT JOIN 

SELECT * 
FROM clientes 
right JOIN compra
ON clientes.client_id=compra.cliente_id;

-- Mostrar las direccciones de cada pais 
USE sakila;


