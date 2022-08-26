package com.jra.herencia;

public class BasePadre {
    public int a;
    private double b;
    private String c;

    public BasePadre() {
    }
    public void visualizarA(){
        System.out.println("Objeto H-> Soy un metodo de la clase padre");
    }
    public void visualizarABC(){
        System.out.println("Objeto Ho-> Soy el metodo vizualizacionABC");

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
