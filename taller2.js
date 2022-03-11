console.log("Solucion del punto #1");

var numerolado = prompt ("por favor ingrese la medida de los lados para hallar el área del cuadrado");
var area;
area = numerolado * numerolado;
console.log ("el área del cuadrado es: " + area );
var medlado = prompt ("por favor ingrese la medida del lado para poder hallar el volumen del cubo");
var volumen;
volumen = medlado * medlado * medlado;
console.log ("el volumen del cubo es: "+ volumen);


console.log("Solucion del punto #2");

var numdelabase = prompt("por favor ingrese la medida de la base para poder hallar el area del rectangulo");
var arearec;
var numlado = prompt ("ingrese la medida del lado para hallar el area del rectangulo");
arearec = numdelabase * numlado
console.log ("el area del rectangulo es: "+ arearec);
var perimetro;
perimetro = numdelabase*2 + numlado* 2;
console.log ("el perimetro del rectangulo es: "+ perimetro);


console.log("Solucion del punto #3");

var diametro = prompt ("por favor ingrese la medida del diametro para poder hallar el area del circulo");
var areacir;
areacir = diametro*Math.PI;
console.log ("el area del circulo es: "+ areacir);
var radio;
radio = parseInt(prompt("por favor ingresar el radio") );
console.log ("el area del circulo es: ", Math.PI * radio * radio);


console.log("Solucion del punto #4");

var base1;
var base2;
var h;
base1 = parseInt(prompt("por favor ingresar la primera base") );
base2 = parseInt(prompt("por favor ingresar la segunda base") );
h = parseInt(prompt("Por favor ingresar la altura") );
console.log("el area del trapezoide es: ", + (h * (base1 + base2)/ 2) );


console.log("Solucion del punto #5");

var ancho;
var largo;
var profundo;
ancho = parseInt(prompt("por favor ingresar la medida del ancho") );
largo = parseInt(prompt("por favor ingresar la medida del largo") );
profundo = parseInt(prompt("por favor ingrese la medida de la profundidad") );
console.log("la piscina se llenaria con", + ancho * largo *profundo, "litros");


console.log("Solucion del punto #6");

var alto1;
var ancho1;
var total;
alto1 = parseInt(prompt("por favor ingresar la medida del alto") );
ancho1 = parseInt(prompt("por favor ingresar la medida del ancho") );
total = (alto1 * ancho1) * 22000;
console.log("el total apagar es de: " + total + "$");


console.log("Solucion del punto #7A");

var cm;
var resultado;
cm =parseInt(prompt("por favor ingresar de centimtros que quieres convertir a kilometros") );
resultado = cm*(1/100)*(1/1000);
console.log("los centimetros que han sido convertidos son: " + resultado + "Km");


console.log("Solucion del punto #7B");

var dl;
var resultado2;
dl =parseInt(prompt("favor ingresar los decilitros que quieres convertir a litros") );
resultado2 = dl*(0.1/1.0);
console.log("los decilitros que han sido convertidos son: " + resultado + "L");
 

console.log("Solucion del punto #7C");

var mg;
var resultado3;
mg = parseInt(prompt("por favor ingresar los microgramos que quieres convertir a gramos") );
resultado3 = mg*(1.0/1000000);
console.log("los microgramos que han sido convertidos son " + resultado3 + "G");


console.log("Solucion del punto #7D");

var kilo;
var resultado4;
kilo =prompt("por favor ingresar los kilometros que quieres convertir a milimetros");
resultado4 = kilo*1000000
console.log("los kilometros que han sido convertidos son " + resultado4 + "ml");
 

