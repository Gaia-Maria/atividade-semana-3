//Elabore um algoritmo que receba dois números e determine qual é o maior entre
 //eles, se os números forem iguais, mostre uma mensagem no console "Os números 
// são iguais".

function doisNumeros (num1, num2) {
    if (num1 > num2 ){
    return `${(num1)} é maior que ${(num2)}`
}   else if (num1 < num2){
    return `${(num1)} é menor que ${(num2)}`
}   else{
    return 'Os numeros são iguais'}
}

console.log(doisNumeros(4, 35))// 4 é menor que 35
console.log(doisNumeros(70, 15))// 70 é maior que 15
console.log(doisNumeros(29, 29))// Os numeros são igauis
   
