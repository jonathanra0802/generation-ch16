package MiFecha;

public class Fecha {
    private int Dia;
    private int Mes;
    private int Anio;

    public Fecha(){}

    public int getDia() {
        return Dia;
    }

    public void setDia(int dia) {
        Dia = dia;
    }

    public int getMes() {
        return Mes;
    }

    public void setMes(int mes) {
        Mes = mes;
    }

    public int getAnio() {
        return Anio;
    }

    public void setAnio(int anio) {
        Anio = anio;
    }


    public String formaF(){
        return getDia() + "/" + 0 + getMes() + "/" + getAnio();
    }


    public static void main(String[] args) {
        //Traer los elementos de fecha
        Fecha f=new Fecha();
        f.setDia(25);
        f.setMes(8);
        f.setAnio(2022);
        System.out.println(f.formaF());
    }
}
