package Tarea2;

import java.util.Scanner;

public class Triangulo {
    private int Base;
    private int Altura;

    public Triangulo(){}

    public int getBase() {
        return Base;
    }

    public void setBase(int base) {
        Base = base;
    }

    public int getAltura() {
        return Altura;
    }

    public void setAltura(int altura) {
        Altura = altura;
    }
    public int areaT(){

        return ((getBase()*getAltura())/2);
    }
    public int visualizarA(){
        return areaT();
    }
}
