
public class Hi{
static int a;
int b;
public static void main(String args[])
{
Hi h=new Hi();
Hi h2=new Hi();
h.a=10;
System.out.println("The value storing in h object of a:"+h.a);
h2.a=20;
System.out.println("The value storing in h2 object of a:"+h.a);
System.out.println("The value now in h object of a as it is static:"+h.a);


h.b=56;
System.out.println("The value storing in h object of b:"+h.b);
h2.b=90;
System.out.println("The value storing in h2 object of b:"+h2.b);
System.out.println("The value now in h object of b:"+h.b);

}

}



