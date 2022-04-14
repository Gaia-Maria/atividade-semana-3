//Crie um algoritmo que receba três notas de um aluno, calcule sua média e
// mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

function mediaNota(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) /3

 if (media >=7 && media <=10) {
    return `Sua nota é ${media}, você está aprovado!`
    
} else if (media >=5 && media < 7 ){
    return `Sua nota é ${media}, nos vemos na recuperção!`
   
 } else if (media >= 0 && media <5){
     return `Sua nota é ${media}, você esta reprovado!`
 }
} 

console.log(mediaNota(8, 9, 10))// Sua nota é 9, você esta aprovado!
console.log(mediaNota(5, 6, 4))// Sua nota é 5, nos vemos na recuperção!
console.log(mediaNota(3, 2, 1))// Sua nota é 2, você esta reprovado!