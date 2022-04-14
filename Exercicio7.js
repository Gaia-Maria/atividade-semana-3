//Crie uma função que recebe 2 parâmetros e retorna o resultado da 
//divisão entre eles. Diga se esse numero é par ou ímpar.

function parImpar(num1 , num2){
    let divisao = num1 / num2
if (divisao % 2 == 0 ){
    return `O resultado é ${divisao}. Este numero é par`
}else{
    return `O resultado é ${divisao}. Este numero é impar`
}
}

console.log(parImpar(20 , 10))// O resultado é 2. Este numero é par