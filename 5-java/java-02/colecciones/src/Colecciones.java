import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {
        //List-- ArrayList
        //Los valores se ordenan segun el orden en que los agreguemos
        //permiten tener valores duplicados
        //Es una coleccion de objetos

        List<String> meses = new ArrayList<String>();

        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1,"abril");

        //Metodo para guardar y nos muestre el valor elimnado
        String mes= meses.remove(3);

        System.out.println(meses);
        System.out.println(mes);

        //el metodo get regresa un valor especifico
        System.out.println(meses.get(0));
        System.out.println(meses.size());

        for (String elemento : meses){
            System.out.println(elemento);
        }
        //clases envolventes
        int num1 = 10;
        Integer num2=10;

        System.out.println(num1+10);
        System.out.println(num2 -5);
        System.out.println(num2.getClass().getSimpleName());

        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(1000);
        numeros.add(600);
    }
}
