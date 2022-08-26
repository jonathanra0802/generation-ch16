package EjemplosResumen.Animal;

public class Animal {
    private String raza;
    private String nombre;
    private int edad;

    public Animal(String nuevoNombre){
        nombre=nuevoNombre;//Se le da el nombre de un animal
    }
    //Metodo para obtener la edad del animal
    public int getEdad(){
        return edad;
    }
    //Metodo para establecer la edad del animal
    public void setEdad(int nuevaEdad){
        edad=nuevaEdad;
    }
    //Metodo para obtener el nombre de animal
    public String getNombre(){
        return nombre;
    }
}
