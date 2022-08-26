package MetPrincipal;

import EjemplosResumen.Animal.Animal;
import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        MenuOp menuOp=new MenuOp();
        menuOp.menu();
        System.out.println("Elija una opcion ->");
        int op= sc.nextInt();




        switch (op ){
            case 1:
                Saludo s= new Saludo();
                s.Saludar();
                System.out.println(s.saludar0());
                break;
            case 2:
                Persona p = new Persona();
                p.setNombre("Juan");
                p.setEdad(23);
                p.setNss(21312);

                System.out.println("El valor de la variable instancia p.nombre -> "+p.getNombre());
                System.out.println("El valor de la variable instancia p.edad -> "+p.getEdad());
                System.out.println("El valor de la variable instancia p.nss -> "+p.getNss());
                break;
            case 3:
                Fecha f=new Fecha();
                f.setDia(25);
                f.setMes(8);
                f.setAnio(2022);
                System.out.println(f.formaF());
                break;
            case 4:
                Animal miAnimal = new Animal("Falco");
                //le establecemos 3 años de edad a Falco
                miAnimal.setEdad(3);
                //Mostraremos el nombre del animal en la pantalla
                System.out.println("El nombre del animal es: "+miAnimal.getNombre());
                //Mostramos la edad del animal en la pantalla
                System.out.println( "Y tiene " + miAnimal.getEdad()+" años");
            break;
            case 5:
                System.out.println("Saliendo del programa");
                break;

            default:
                System.out.println("No se selecciono alguna opcion correcta");


        }
    }
}
