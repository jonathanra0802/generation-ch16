USE sakila;

-- El titulo de las peliculas con el idioma que tienen 
SELECT *FROM film;
SELECT
film.title as TituloDePeli
FROM film
INNER JOIN language on language.name = film.title
Order by TituloDePeli;
-- Pruba 2
Select * 
FROM film
CROSS JOIN language;

-- Que actores an trabajado en peliculas francesas
Select 
actor.first_name AS NombreDelActor,
actor.last_name AS ApellidoDelActor
From actor

