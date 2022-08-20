import java.util.Scanner;

public class edad {
    public static void main(String[] args) {


        //let nombre= prompt
        Scanner escaner = new Scanner(System.in); //instanciar
        System.out.println("Escribe tu edad");
        int edad= escaner.nextInt();
        escaner.close();//Cuando ya no se requiere leer mas datos
        if (edad >=18){
            System.out.println("eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }
        //operador ternario
        String resultado =(edad >=18) ?"Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);
    }
}
