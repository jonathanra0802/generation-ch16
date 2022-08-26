package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        //Instancia, la relación de un objeto con una clase
        Persona p = new Persona();
        p.setNombre("Juan");
        p.setEdad(23);
        p.setNss(21312);

        System.out.println("El valor de la variable instancia p.nombre -> "+p.getNombre());
        System.out.println("El valor de la variable instancia p.edad -> "+p.getEdad());
        System.out.println("El valor de la variable instancia p.nss -> "+p.getNss());
    }
}
