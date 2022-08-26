package Tarea2;


public class EjercicioTriangulo {
    public static void main(String[] args) {

        Triangulo t=new Triangulo();
        t.setBase(7);
        t.setAltura(4);
        System.out.println("La base es de -> "+t.getBase()+"\nEl area del triangulo es-> "+t.getAltura());
        System.out.println("El area del triangulo es ->"+t.visualizarA());
    }
}
