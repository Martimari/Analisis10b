function main_calculadora(){
var menu = prompt("¿que operacion desea hacer? (digite el numero)/n 1.suma /n 2.resta /n 3.multiplicacion /n 4.division /n 5.potencia");

var numero1 = parseFloat(prompt("ingrese el primer valor "));
var numero2 =parseFloat(prompt("ingrese el segundo valor"));


if(menu==1){
    console.log(suma(numero1, numero2));
}else if (menu == 2){
    console.log(resta(numero1, numero2));
}else if(menu == 3){
    console.log(multiplicacion(numero1, numero2));
}else if(menu == 4){
    console.log(division(numero1, numero2));
}else if (menu == 5){
    console.log(potencia(numero1, numero2));
}
}