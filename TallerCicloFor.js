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
var arreglo = []
var nombre
var mayor
for(var i=0; i<10; i++){
    nombre=prompt("Registre el numero" + 1)
    arreglo.push (nombre);
}
mayor=arreglo[0]
for(var i=0; i<10; i++){
    
    if (arreglo[i]>mayor){
        mayor=arreglo[i]



    }
   

}

console.log("punto 5")
var arreglo
var producto

for(var i=1;  i<=5; i++){
    producto=prompt("ingrese  los articulos que desea comprar ")
    arreglo.push(precio)

}
var arregloprecio=[]
for(var i=0; i<arreglo.length; i++){
    var precio = parseInt(prompt("ingrese el precio de "+arreglo[i]))
    arregloprecio.push(precio)
}
