package Tarea1;

public class EjercicioHora {
    public static void main(String[] args) {
    Hora h=new Hora();
        h.setHora(11);
        h.setMinuto(15);
        h.setSegundo(30);
        System.out.println("La hora es: "+h.visualizarHora());
    }
}
