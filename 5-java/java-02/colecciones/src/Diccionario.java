import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        Map<String, String> diccionario = new HashMap<String,String>(); //Creamos una cadena con dos elemenmtos string
        //el primer string es para el valor

        //agregamos el listado de las palabras primero en español y despues en ingles

        diccionario.put("perro","dog");
        diccionario.put("zorro","fox");
        diccionario.put("vaca","cow");
        diccionario.put("toro","bull");
        diccionario.put("tiburon","shark");
        diccionario.put("raton","mouse");
        diccionario.put("pez","fish");
        diccionario.put("serpiente","snake");
        diccionario.put("pavo","turkey");
        diccionario.put("pato","duck");
        diccionario.put("pajaro","bird");
        diccionario.put("oso","bear");
        diccionario.put("murcielago","bat");
        diccionario.put("mariposa","butterfly");
        diccionario.put("leon","lion");
        diccionario.put("lobo","wolf");
        diccionario.put("hormiga","ant");
        diccionario.put("gato","cat");
        diccionario.put("foca","seal");
        diccionario.put("cerdo","pig");

        //Utiliza un elemento HashMap para almacenar los pares de las palabras
        //Aqui vamos a almacenar los pares de las palabras
        Map<String, String> dictionary = new HashMap<String,String>();
        for (String key : diccionario.keySet()) {
            dictionary.put(diccionario.get(key), key);
        }

        //Escoger 5 palabras al azar
        System.out.println("\nAnimales en ingles mostrados\n");
        for(int i=0; i<5; i++){
            Object llaves = diccionario.keySet().toArray()[i];
            System.out.println("-"+diccionario.get(llaves));
        }

        //Pedimos al usuario que escoja y escriba una palabra de las 5 palabras generadas al azar
        System.out.println ("\nPor favor escribe una de las palabras mostradas:");
        String palabra= "";
        Scanner palabraEscrita = new Scanner (System.in); //Creación de un objeto Scanner
        palabra = palabraEscrita.nextLine (); //Invocamos un método sobre un objeto Scanner

        System.out.println ("La palabra que escogio es -> " +"'"+ palabra + "'"+" su traduccion al español es -> 'perro'");
        }

       }


