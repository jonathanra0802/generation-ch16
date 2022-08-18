public class ejemploVariables {
    public static void main(String[] args) {
        String nombre ="Jonathan ";
        String saludo="Hola esto es un ejemplo de una variable";

        System.out.println(saludo+ " "+nombre);
        char espacio = ' ';
        System.out.println("espacio = " + espacio);
        System.out.println("Char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor maximo: " + Character.MAX_VALUE );
        System.out.println("char valor minimo: " + Character.MIN_VALUE );

        int numeroEntero =2;
        System.out.println("numeroEntero = " +numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE );
        System.out.println("int valor minimo: " + Integer.MIN_VALUE );

        float numeroFloat=1.5f;
        System.out.println("numeroFloat = " +numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE );
        System.out.println("float valor minimo: " + Float.MIN_VALUE );

        double numeroDouble=3;
        System.out.println("numeroDouble = " +numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE );
        System.out.println("double valor minimo: " + Double.MIN_VALUE );

        long valorLong=129833712;
        System.out.println("numeroLong = " +valorLong);
        System.out.println("Long corresponde en byte: " + Long.BYTES);
        System.out.println("Long corresponde en bits: " + Long.SIZE);
        System.out.println("Long valor maximo: " + Long.MAX_VALUE );
        System.out.println("Long valor minimo: " + Long.MIN_VALUE );

        short valorShort=1212;
        System.out.println("numeroShort = " +valorShort);
        System.out.println("Short corresponde en byte: " + Short.BYTES);
        System.out.println("Short corresponde en bits: " + Short.SIZE);
        System.out.println("Short valor maximo: " + Short.MAX_VALUE );
        System.out.println("Short valor minimo: " + Short.MIN_VALUE );
    }
}

