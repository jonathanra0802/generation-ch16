package EjemplosResumen.Aclaracion;

public class Aclaracion1 {
    private int atributo1;
    private int atributo2;
    private String atributo3;
    //Declaramos un contructor
    public Aclaracion1(int attr1, int attr2, String attr3){
        atributo1=attr1;
        atributo2=attr2;
        atributo3=attr3;
    }

    public static void main(String[] args) {
        Aclaracion1 ac=new Aclaracion1(5,10,"x"); //Creamos un objeto enviando parametros al contructor
        System.out.println(ac.atributo1+" "+ac.atributo2+" "+ac.atributo3);
    }
}
