import java.util.Scanner;

public class operadoresAritmeticos {
    public static void main(String[] args) {
        int i=5 , j=4, suma= i+j;
        System.out.println("suma = " + suma);

        System.out.println("i + j =" +(i+j) );
        System.out.println("i + j =" + i +j );

        int resta = i-j;
        System.out.println("resta = "+ resta);
        System.out.println("resta = "+ (i-j));

        int multi = i*j;
        System.out.println("multi = "+ multi);
        System.out.println("multi = "+ (i*j));

        int div = i/j;
        System.out.println("multi = "+ div);

        float div1=(float) i/ (float) j;
        System.out.println("Division= " +(div1) );

        int res= i % j;
        System.out.println("Residuo de i/j= " + (res));
        System.out.println("Residuo de i/j= " + (i % j));

        Scanner scanner= new Scanner(System.in);
        System.out.println("Cual es tu edad");
        String dato= scanner.next();
        int edad = Integer.parseInt(dato);

        System.out.println("Mi edad es: "+ edad);
    }
}
