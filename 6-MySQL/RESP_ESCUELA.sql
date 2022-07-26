-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 13:24:24 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`ALUMNO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`ALUMNO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`ALUMNO` (
  `idALUMNO` INT NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `APELLIDO` VARCHAR(45) NOT NULL,
  `CURSO` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idALUMNO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`MATERIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`MATERIA` ;

CREATE TABLE IF NOT EXISTS `mydb`.`MATERIA` (
  `idMATERIA` INT NOT NULL,
  `NOMBRE` VARCHAR(45) NULL,
  `VERSION` VARCHAR(45) NULL,
  `GRADO` VARCHAR(45) NULL,
  PRIMARY KEY (`idMATERIA`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`PROFESOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`PROFESOR` ;

CREATE TABLE IF NOT EXISTS `mydb`.`PROFESOR` (
  `idPROFESOR` INT NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `APELLIDO` VARCHAR(45) NOT NULL,
  `MATERIA_idMATERIA` INT NOT NULL,
  PRIMARY KEY (`idPROFESOR`, `MATERIA_idMATERIA`),
  INDEX `fk_PROFESOR_MATERIA1_idx` (`MATERIA_idMATERIA` ASC) VISIBLE,
  CONSTRAINT `fk_PROFESOR_MATERIA1`
    FOREIGN KEY (`MATERIA_idMATERIA`)
    REFERENCES `mydb`.`MATERIA` (`idMATERIA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`PROFESOR_has_ALUMNO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`PROFESOR_has_ALUMNO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`PROFESOR_has_ALUMNO` (
  `PROFESOR_idPROFESOR` INT NOT NULL,
  `ALUMNO_idALUMNO` INT NOT NULL,
  PRIMARY KEY (`PROFESOR_idPROFESOR`, `ALUMNO_idALUMNO`),
  INDEX `fk_PROFESOR_has_ALUMNO_ALUMNO1_idx` (`ALUMNO_idALUMNO` ASC) VISIBLE,
  INDEX `fk_PROFESOR_has_ALUMNO_PROFESOR_idx` (`PROFESOR_idPROFESOR` ASC) VISIBLE,
  CONSTRAINT `fk_PROFESOR_has_ALUMNO_PROFESOR`
    FOREIGN KEY (`PROFESOR_idPROFESOR`)
    REFERENCES `mydb`.`PROFESOR` (`idPROFESOR`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PROFESOR_has_ALUMNO_ALUMNO1`
    FOREIGN KEY (`ALUMNO_idALUMNO`)
    REFERENCES `mydb`.`ALUMNO` (`idALUMNO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ALUMNO_has_MATERIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`ALUMNO_has_MATERIA` ;

CREATE TABLE IF NOT EXISTS `mydb`.`ALUMNO_has_MATERIA` (
  `ALUMNO_idALUMNO` INT NOT NULL,
  `MATERIA_idMATERIA` INT NOT NULL,
  PRIMARY KEY (`ALUMNO_idALUMNO`, `MATERIA_idMATERIA`),
  INDEX `fk_ALUMNO_has_MATERIA_MATERIA1_idx` (`MATERIA_idMATERIA` ASC) VISIBLE,
  INDEX `fk_ALUMNO_has_MATERIA_ALUMNO1_idx` (`ALUMNO_idALUMNO` ASC) VISIBLE,
  CONSTRAINT `fk_ALUMNO_has_MATERIA_ALUMNO1`
    FOREIGN KEY (`ALUMNO_idALUMNO`)
    REFERENCES `mydb`.`ALUMNO` (`idALUMNO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ALUMNO_has_MATERIA_MATERIA1`
    FOREIGN KEY (`MATERIA_idMATERIA`)
    REFERENCES `mydb`.`MATERIA` (`idMATERIA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
