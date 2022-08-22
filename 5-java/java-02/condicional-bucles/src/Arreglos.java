public class Arreglos {
    public static void main(String[] args) {
        //En los arreglos no se pueden combinar tipos de datos
        int[] numerosAleatorios = {1,2,4};
        String[] valores = {"Hola", "Adios", "etc"};
        //Los arreglos tienen un tamanio definido
        char[] caracteres = new char[4];
        caracteres[0]='H';
        caracteres[1]='o';
        caracteres[2]='l';
        caracteres[3]='a';

        valores[2] ="Valor cambiado";
        System.out.println(numerosAleatorios);
        System.out.println(valores[2]);
        System.out.println(caracteres);

        //for each
        for (String elemento : valores){
            System.out.println(elemento);
        }
        for (int numero: numerosAleatorios)
            System.out.println(numero);
    }
}
