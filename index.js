console.log("hola mundo"); // imprimir por consola 
//comentario en linea
/*comentario
en 
varias 
lineas
o
multilinea
*/

//variables
/*son espacios de memoria que almacenan datos o informacion
Existen varios tipos de variables en js, pero generalmente se utilizan los siguientes:
String:
almacena cadenas de texto, se deben declarar p asignar el valor entre comillas 
ins:
almacena numeros enteros 
doble:
almacena numros reales
boolean:
almacena valores de verdad (true, false)
*/
/* Declarar variables 
declacara una variable es crearla, decirle a el lenguaje como se llama la variable es indiucarle que ya existe. para declarar una variable se puede utilizar la palabra var o let
*/
var nombre;

console.log(nombre);
/*inicializar variables
para inicializar variables es necesario asignar un valor cuando se crea esta variable
*/
var apellido= "Granda, Espinosa";
console.log(apellido);
/*asignar un valor:
asignar un valor se hace mediante el signo =, se debe hacer sobre una variable que ya fue declarada 
*/
nombre ="Mariana, Martina"
console.log(nombre +" "+apellido);
//desde otra variable
var edad = 15;
var edad_estudiante = edad; 
//desde el teclado 
var grado_estudiante = prompt("ingrese el grado: ");
console.log("el grado es: " + grado_estudiante);
/*constantes:
 Son  valores que una vez iniciados no pueden cambiar lo que almacena.se crea con la palabra reservada Const, 
 el nombre de las constantes se escribe todo en mayusculas para disferenciarlos de las variables
*/  
const PI =3.1416;
//PI =5;
//imprimir por consola
//simple
console.log ("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es "+ edad +"años")
//operadores
//suma
var suma;
suma = 5+3;
console.log(suma);
let a = 10;
suma = 8 + a;
suma = a + 8;
console.log (suma);
let b = 20;
suma = a + b;
console.log(suma);
//resta
var resultado;
resultado = a - b;
console.log (resultado);
resultado = b - a;
console.log (resultado);
//multiplicacion
var producto;
producto = a * b;
console.log (producto);
//division 
var division;
division = b / a;
console.log(division);
//orden de operaciones
var res;
res = a*2; //20
console.log(res);
res = a*2 - 1; //19
console.log (res);
res = a*2 - 1; //10
console.log(res);
//residuo
var residuo;
residuo= 12% 2 ;//o
console.log (residuo);
//contadores
//incremento
var incre = 1;
console.log(incre);//1
incre = incre + 1;
console.log(incre);//2
incre += 1;
console.log(incre);//3
incre++; 
console.log(incre);//4
//decremento
var decre =1;
console.log (decre);//1
decre = decre - 1;
console.log(decre);//0
decre -=1;
console.log(decre);//-1
decre--;
console.log(decre);//-2
//operaciones aumentadas
//son opoeraciones que se le realizan a una variable y el resultado se guarda en si mismo. La variable debe tener un valor antes de realizar la operacion.
var sumaAumento =0;
sumaAumento += 1;
sumaAumento += 48;
console.log(sumaAumento);
var restaAumento =20;
restaAumento -= 1;
restaAumento -= 8;
console.log(restaAumento);
var productoAumento =20;
productoAumento *= 1;
productoAumento *= 8;
console.log(productoAumento);
//potencia
var exp;
exp = 3**2;
console.log(exp);
exp = 3**3;
console.log(exp);
//cadenas o texto
//suma de cadenas
var nombre = "mariana";
var apellido = "espinosa";
var nomCompleto = nombre + " " + apellido;
console.log(nomCompleto);
var cadenita1 ="3";
var cadenita2 ="5";
var cadenaTotal = cadenita1 + cadenita2;
console.log(cadenaTotal);
//.length
//permite conocer la longitud de una cadena o el tamaño de un vector
console.log(nomCompleto.length);
console.log(nombre[0]);
//se debe buscar la longitud -1 (.length-1)








