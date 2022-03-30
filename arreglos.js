/*es una estructura que almacena cualquier tipo de dato y cualquier cantidad, es decir, String, int, double, array, objectos, entre otros. los arreglos o arrays tienen operaciones como insertar, eliminar, modificar y consultar.
La declaracion de un arreglo se hace con corchetes [] y los elementos dentro de el se separan con comas (;). Tambien se crea o se declara con las palabras reseverdas VAR O LET seguidas del nombre de la regla.*/
var miPrimerArreglo=["Jose", 14];
console.log (miPrimerArreglo);

var notaEst = [["Sofia", 4.5], ["mari", 4.2]];
console.log (notaEst);

//recordar que las posiciones de un vector o arreglo comienzan desde cero 

console.log (miPrimerArreglo[0]); //jose

["Jose",14] [1]//14

//consulta posiciones de arreglos dentro de arreglos

[["Sofia", 4.5], ["mari",4.2]];
console.log (notaEst[0][0]);
console.log (notaEst[0][1]);
console.log (notaEst[1][0]);

//45 
//mari 

//modificar elementos
//se debe indicar la posicion del elemento y luego se le asigna el nuevo valor 
miPrimerArreglo [0]= "mario";
console.log(miPrimerArreglo);
notaEst[1][0]="laura";
console.log(notaEst[1]);
miPrimerArreglo [1]= 18;
console.log(miPrimerArreglo);
notaEst[0][1]=4.8;
console.log(notaEst[0]);
 
//agregar elementos a el areglo
miPrimerArreglo.push("10B");//PONER DE ULTIMO
console.log(miPrimerArreglo);
miPrimerArreglo.unshift("gomez");//PONER DE PRIMERO
console.log(miPrimerArreglo);

//agregar elementos a el areglo
miPrimerArreglo.pop();//BORRRAR

console.log(miPrimerArreglo);
miPrimerArreglo.shift();
console.log(miPrimerArreglo);

/*
1.crear un arreglo que tenga los elementos
   -analisis
   -tecnologia
   -desarrollo
 2.cambiar desarrollo por BBDD
 3.convertir el arreglo para que quede:
   -introducion
   -analisis
   -tecnologia
Nota: para cada punto, imprima el arreglo completo
*/

//punto 1
var miSegundoArreglo=["analisis", "tecnologia", "desarrollo"];
console.log(miSegundoArreglo);

//punto 2
miSegundoArreglo [2]= "BBDD";
console.log(miSegundoArreglo);

//punto 3
miSegundoArreglo.unshift("introduccion");
miSegundoArreglo.pop("BBDD");
console.log(miSegundoArreglo);
