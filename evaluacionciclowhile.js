//Martina Granda y Mariana Espinosa

// punto 1
console.log("punto 1");

var repeticion=0;
var numerito= parseInt(prompt("ingrese el numero hasta el que quiere llegar y conocer los multiplos de 5"));

while (repeticion<=numerito){
    if(repeticion%5==0){
        console.log("el numerito "+repeticion+" si es un multiplo de 5")


    }else{
        console.log("el numerito "+repeticion+" no es multiplo de 5" )
    }
    repeticion+=1
}

//punto 2
console.log("punto 2");

var articulos=parseInt(prompt("ingrese la cantidad de articulos que lleva"));
var suma=0;
var acu=0;

while(acu<articulos){
    var precio=parseInt(prompt("por favor ingrese el valor de su articulo"));
    suma += precio
    acu += 1
}
console.log("su valor total es de " +suma)

//punto 3
console.log("punto 3")

var suma=0;
var acu=0;
var respuesta=prompt("si desea ingresar articulos ponga si y si no ponga no");

while(respuesta=="si"){
    var precio=parseInt(prompt("por favor ingrese el valor de su articulo"));
    suma += precio
    acu += 1
    respuesta=prompt("si desea ingresar otro articulo ponga si y si no ponga no");
        

}
console.log("su valor total es de " +suma)

//punto 4
console.log("punto 4")

var suma=0;
var acu=0;
var respuesta=prompt("si desea ingresar articulos ponga si y si no ponga no");
var repeticion=0;

while(respuesta=="si"){
    var precio=parseInt(prompt("por favor ingrese el valor de su articulo"));
    suma += precio
    acu += 1
    respuesta=prompt("si desea ingresar otro articulo ponga si y si no ponga no");
       repeticion+=1 

}
if(repeticion>=8 && repeticion<15){
   suma*0.90

console.log("usted tiene un descuento de el 10% en su compra y su valor total es de " +suma)
} 
else if(repeticion>=15 && repeticion<15){
   suma*0.85
console.log("usted tiene un descuento del 15% en su compra y su valor total es de " +suma)
}
else if(repeticion>=25){
   suma*0.8
   ("usted tiene un descuento de el 20% en su compra y su valor total es de " +suma)
}
 else if(repeticion<8){
 console.log("su compra no aplica para un descuemto y el valor total es de " +suma)
}

//punto 5
console.log("punto 5")

var perdio =0
var notascant = parseint(prompt("ingrese la cantidad de notas que hay en el curso"))
var actualnot
var ciclo = 1
var gano = 0 

while (ciclo<=notascant){

    var actualnot= parseFloat(prompt ("ingrese la nota final del estudiante"+ciclo))
    ciclo += 1


    if(actualnot >= 3.5){
        console.log ("el estudiante gano la materia")
        gano+= 1

    }else {
        console.log ("el estudiante perdio la materia")
        perdio +=1
    }
}
 if (gano<=perdio){
     console.log("debe abrirse el curso de verano")
 }else{
     console.log("la cantidad de estudiantes no es suficiente para el curso de verano")
 }


