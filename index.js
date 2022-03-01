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
declacara una variable es crearla, decirle a el lenguaje como se llama la variable es indiucarle que ya existe.
para declarar una variable se puede utilizar la palabra var o let
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
|