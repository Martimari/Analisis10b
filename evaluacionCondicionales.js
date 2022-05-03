//mariana espinosa, martina granda 

//primer punto 
var ValorVariable= 350;
 
if (ValorVariable >300 ){
   console.log("La condición es verdadera")
}


//segundo punto 
var valor= 2;
 
if (valor >= 20 || valor <= 5){
   console.log("El valor es correcto")
}

//tercer punto
var numero =50 ;
 
if (numero === "40"){
   console.log('El número es igual que "40" en valor y tipo');
}else if(numero >10 && numero<50 ){
    console.log('El número es mayor que 10 y menor a 50');
}else if(numero ==9 || numero <=8){
    console.log("El número es igual que 9 o menor igual que 8");
}else if(numero >=50){
    console.log("El número es mayor igual que 50");
}
//Respuesta 3.A
numero="40"
//Respuesta 3.B
    numero=40
//Respuesta 3.C
    numero=5
//Respuesta 3.D
    numero=50
    

//cuarto punto 
var numerito1 =4;
var numerito2 =7; 

if (numerito1 == numerito2){
    console.log ("el numerito1 es igual al numerito2 " )
}else if (numerito1 > numerito2){
    console.log (numerito1 + " es mayor que " + numerito2 )
} else if (numerito1 < numerito2){
    console.log (numerito1 + " es menor que "+ numerito2)
}

//quinto punto 
var  tipopersona = "bebe"
if (tipopersona== "infante"){
console.log ("el obsequio que usted recibira es un juguete")
}else if (tipopersona=="joven"){
  console.log("el obsequio que usted recibira son unos audifonos")
}else if(tipopersona=="adulto"){
  console.log("el obsequio que usted recibira es un bono para una cena en pareja")
}else if (tipopersona=="adulto mayor"){
    console.log("el obsequio que usted recibira es un paseo a un sitio turistico")
}else {
    console.log ("el tipo de persona no existe por lo cual no tendra obsequio")
}

//sexto punto
var  pulgadas = 5;
var domicilio =24000;

if (pulgadas == 37){
console.log (" el precio de este tv es de " + (500000  +  domicilio ) + " que es el de el domicilio y la instalacion")
}else if (pulgadas == 42){
  console.log("el precio de este tv es de " + (820000  +  domicilio ) + " que es el de el domicilio y la instalacion")
}else if(pulgadas ==55){
  console.log("el precio de este tv es de " + (1500000  +  domicilio ) + " que es el de el domicilio y la instalacion")
}else if (pulgadas ==75){
    console.log("el precio de este tv es de " + (3000000  +  domicilio ) + " que es el de el domicilio y la instalacion")
}else {
    console.log ("no tenemos disponible este tamaño")
}

