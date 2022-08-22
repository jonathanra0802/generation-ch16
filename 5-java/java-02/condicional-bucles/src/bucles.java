import java.util.Objects;
import java.util.Scanner;

public class bucles {
    public static void main(String[] args) {
  // for (int i=0; i<10; i++){
    //    System.out.println(i);
     //   }
    String condicion = "";
        Scanner sc = new Scanner(System.in);
        while (!Objects.equals(condicion, "Hola")){

            System.out.println("Saludame");
            condicion=sc.next();
        }
        do {
            System.out.println("Saludame x2");
            condicion=sc.next();
        } while (!Objects.equals(condicion, "Hola"));
    }
}
