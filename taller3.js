//primer punto

var horas;
var litros;

litros =prompt("por favor ingrese con cuantos litros se llena la piscina");
horas = litros / 145 
console.log ("las horas que tarda la piscina en llenarse son " + horas + "h");

//segundo punto

var longim;
var milim;

longim = prompt("por favor ingrese una longitud en metros");
 milim = longim * 1000
 console.log ("la longitud que ingreso en metros es igual a " + milim + "mm");

 //tercer punto

 var milim;
 var decimetros;

 decimetros = milim * 0.01
 console.log ("el valor de milimetros en decimetros es igual a " + decimetros + "dm");

 //cuarto punto

 var kilometros
 var decimetros
   
kilometros = decimetros * 0.0001
console.log ("el valor de decimetros en kilometros es igual a " + kilometros + "km" );

//quinto punto

var horasll;
var costo;

horasll =prompt("por favor ingrese la duracion de la llamada");
costo = 120 * 60 * horasll
console.log ("el costo de la llamada segun la duracion de esta es de $" + costo )

//sexto punto

var valorclase;
var hora1;
var adicionales;
var pagofinal;

valorclase = prompt("por favor ingrese el valor de horas a cobrar")
hora1 = 40000;
adicionales = (valorclase-1)*25000
pagofinal = adicionales + hora1
console.log("su valor a pagar por " + valorclase + " horas es de $" + pagofinal);