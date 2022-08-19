public class ejemploString {
    public static void main(String[] args) {
        String curso="Curso en java hecho por: ";
        String nombre="Jonathan Ramirez";
        String resultado= new String("Curso en java hecho por: ");
        System.out.println(resultado);

        boolean esigual = curso == resultado;
        System.out.println("esigual = "+ esigual);

        esigual = curso.equals(resultado);
        System.out.println("esigual= " + esigual);
        // equals se usa para objetos
        // el equalsIgnoreCase() solo ignora mayusculas y minusculas
        //
        String concat = curso +" con  "+nombre;
        System.out.println("concat = " + concat);

        String dia = " Jueves";
        String concat1 = concat.concat("").concat(dia);
        System.out.println("concat1: " + concat1);

        // Operadores
        //en este caso si afecta el orden ++a primero aplica el cambio y después se referencia el valor
        //pero si usamos a++ primero se referencia el valor y después se modifica

    }
}

