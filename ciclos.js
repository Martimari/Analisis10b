var casillasLlenas = 0; //Variable que cuenta cuántas casillas se han llenado
var arreglo = []; // Variable que crea el arreglo vacío
 
while(casillasLlenas < 4){ //Ciclo While con la condición que debe evaluar cada vez
    arreglo.push("InsertarValor"); //instrucción para llenar una posición a la vez
    casillasLlenas += 1; //conteo de casillas llenas, se suma 1 con cada vuelta del ciclo.
}   
//punto1
var numciclo =0;
while(numciclo<5){
    console.log(2)
    numciclo=numciclo+1
}

//punto2
var nCiclo=0;

while(nCiclo < 8){
    console.log("el numero de ciclo es:" + nCiclo);
    nCiclo += 1;
}

//punto3
var ciclo3=0;

while(ciclo < 20){
    console.log(ciclo3);
    ciclo3+=2;
}

//punto4
var ciclo4="seguir"

while( ciclo4 !=  "ok" ){
    ciclo4 = prompt("ingrese ok para parar");
    console.log("dijo" + ciclo4)
}
//console.log ("dijo ok ");

//punto5
console.log ("punto 4");
var ciclo5=0
while (ciclo5>=0){
ciclo5= prompt=("ingrese un negativo para parar");
console.log("el numero es " + ciclo5)
}

//punto6
console.log("punto 6");
var ciclo61;
var ciclo62;
var resultado6=0;
while(resultado6 <=20){
    ciclo61=parseInt(prompt("valor 1"));
    ciclo62=parseInt(prompt("valor 2"));
    resultado6 = ciclo61 + ciclo62
    console.log("la suma es " + resultado6);

}

//punto7
console.log("punto 7");
var contraseña = "Andres2";
var intento=prompt("ingrese una contraseña")

while(intento != contraseña){
    console.log("la contraseña es incorrecta");
    intento=prompt("ingrese una contraseña nueva: ")
}
console.log("contraseña correcta")

//punto8
console.log("punto 8");
var contraseña = "Andres2";
var intento=prompt("ingrese una contraseña")
var numIntento=1;
while((intento != contraseña) && numIntento < 4){
    
}
