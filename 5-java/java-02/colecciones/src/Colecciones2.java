import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //SET
        //HostSet
        //SET no permiten elementos duplicados.
        //La coleccion que funciona mas rapido

        //no guardan los valores
        Set<String>miSet=new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");

        miSet.remove("Felipe");
        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Felipe"));

        for(String nombre:miSet)
            System.out.println(nombre);
    }
}
