//miguel, martina, mariana
console.log("punto 1");

var numInicio = parseInt(prompt("Ingrese desde qué número inicia el ciclo"))
var numFin = parseInt(prompt("Ingrese hasta qué número va el ciclo"))
for(var i=numInicio; i<=numFin; i++){
console.log(i);
}
for(var i=numFin; i<=numInicio; i++){
    console.log(i);
}

console.log ("punto 2")
var numtabla = parseInt(prompt("ingrese el numero el cual desea que se le muestre la tabla"))
for(var i=0; i<=10; i++)
console.log(numtabla +"x" + i + "=" + numtabla*i )

console.log("punto 3")
var numtablain = parseInt(prompt("ingrese el numero el cual desea que se le muestre la tabla"))
var numtablafin = parseInt(prompt("Ingrese hasta qué número desea que le muestre las tablas"))
for(var i=0; i<=numtablafin; i++){
console.log(numtablain +"x" + i + "=" + numtablain*i )
}

console.log("punto 4");
var nummayor =[]
for(var i=0; i<10; i++){
var numeros = parseInt(prompt("por favor ingrese 10 numeros"))
nummayor.push(numeros);
}
for(var i=0; i<10; i++)
    if(arreglo[i] > nummayor){
        nummayor = arreglo[i]
    }
