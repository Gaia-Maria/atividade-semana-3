// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parImpar(num1){ 
if (num1 % 2 == 0 ){
    return `Este numero é par.`
}else{
    return `Este numero é impar.`
}
}

console.log(parImpar(5))// Este numero é impar
console.log(parImpar(84))// Este numero é par