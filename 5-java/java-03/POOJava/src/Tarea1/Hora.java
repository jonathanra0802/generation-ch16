package Tarea1;

public class Hora {
    private int Hora;
    private int Minuto;
    private int Segundo;

    public Hora(){}

    public int getHora() {
        return Hora;
    }

    public void setHora(int hora) {
        Hora = hora;
    }

    public int getMinuto() {
        return Minuto;
    }

    public void setMinuto(int minuto) {
        Minuto = minuto;
    }

    public int getSegundo() {
        return Segundo;
    }

    public void setSegundo(int segundo) {
        Segundo = segundo;
    }
    public String visualizarHora(){
        return getHora()+":"+getMinuto()+":"+getSegundo();
    }
}
