// primer punto

//creacion de variables
var metros;
var kilometros;

//solicitar datos al usuario
metros =prompt("por favor ingrese el valor en metros");

//realizar la operacion
kilometros = metros / 1000;

//mostrar mensaje con resultado
console.log(metros + " m equivalen a " + kilometros + " km");

//segunto punto
var combustible;
var distancia;

//solicitar a el usuario
distancia =prompt("ingrese la distancia");

//realizar operacion
combustible= (distancia/100)* 290

// mostrar mensaje con resultado 
console.log("el total del combustible gastado en todo el viaje es de " + combustible +"l")

//tercer punto 
var kilolitros;

//realizar la operacion
kilolitros = combustible/ 1000

// mostrar mensaje con resultado
console.log("el total de combustible utilizado es kilolitros es igual a " +kilolitros+ "kilolitros")

//cuarto punto
var diametrocir;
var circunferencia;
var area;
var volumenesf;

//solitar a el usuario
diametrocir =prompt("por favor ingrese el diametro de el circulo");

//realizar operacion 
circunferencia = Math.PI * diametrocir
console.log("la circunferencia de el circulo es de " + circunferencia+ "circunferencia")

