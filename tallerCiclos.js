console.log("Punto 1");

var ciclo1=0;
while(ciclo1 < 7){
    console.log(ciclo1)
    ciclo1+=1
}

console.log("punto 2");
var ciclo2=0;
while(ciclo2 <= 30){
    console.log(ciclo2);
    ciclo2+=3;
}

console.log("punto 3");
var ciclo3=0;
while(ciclo3 <= 50){
    console.log(ciclo3);
    ciclo3+=2;
}

console.log("punto 4");
var cicloim=1;
var numllegada
numllegada=parseInt(prompt("por favor ingrese un numero al cual desea llegar "));
while(cicloim <= numllegada){
    console.log("este numero es impar " + cicloim);
    cicloim+=2;
}

console.log("punto 5");
var numero
while( numero%2!== 1 ){
   numero = prompt("ingrese un numero impar para poder parar");
    console.log("El numero es " + numero)
}

console.log("punto 6");
var acu=0;
var estudiante=0;
var cantidadEst=4;
while(estudiante<cantidadEst){
    var edad=parseInt(prompt("ingrese la edad de cada estudiante "))
    acu+= edad
    estudiante++
}
console.log ("El acumulado de las edades es " + acu)

console.log ("punto 7");

// categoria juguetes 
// objeto = balon

var objeto = "balon";
var resultado = prompt("¿que objeto es?"); 
var intentos=0;

while (objeto != resultado) {
    console.log ("no es correcto, se utiliza para divertirse y se puede jugar de muchas formas")
    resultado= prompt("¿que objeto es?")
    intentos++
}
console.log ("felicitaciones lo adivino intentos = " + intentos)

console.log("punto 8");

var acomulado=0;
var estudiantes=prompt ("ingrese el nombre de el estudiante");
var notascant=prompt ("ingrese la cantidad de notas que tiene el estudiante");
var notas=0;
while(notas<notascant){
    var notaf=parseFloat(prompt("ingrese las notas de uno en uno"));
    acomulado+=notaf;
    console.log(acu);
    notas++
}
var promedio = acomulado/notascant;

if(promedio>=3.5){
    console.log(estudiantes+" gano la asignatura")

}
else console.log (estudiantes+ "perdio la asignatura")

console.log("punto9");

