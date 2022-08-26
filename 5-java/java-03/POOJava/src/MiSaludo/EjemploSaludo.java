package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
    //PRIMERA FORMA DE LLAMAR
        Saludo objSaludo; //SE DECLARA PRIMERO
    objSaludo =new Saludo(); //SE CONTRUYE

    objSaludo.Saludar(); // SE MANDA A LLAMAR
    //SEGUNDA FORMA
        objSaludo.saludar0();
        System.out.println(objSaludo.saludar0());
    //TERCERA FORMA
    Saludo objSaludo0 =new Saludo();
        System.out.println("Este es otro objetom ->" +objSaludo0.saludar0());
    }
}
