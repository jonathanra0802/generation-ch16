package EjemplosResumen.Animal;

public class EjemploAnimal {
    public static void main(String[] args) {
        //Creamos un animal cuyo nombre sera falco
        Animal miAnimal = new Animal("Falco");
        //le establecemos 3 años de edad a Falco
        miAnimal.setEdad(3);
        //Mostraremos el nombre del animal en la pantalla
        System.out.println("El nombre del animal es: "+miAnimal.getNombre());
        //Mostramos la edad del animal en la pantalla
        System.out.println( "Y tiene " + miAnimal.getEdad()+" años");
    }
}
