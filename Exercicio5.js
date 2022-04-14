//Crie uma função que recebe o ano de nascimento da pessoa informando se 
//ela é maior de idade ou menor.

function maiorDeIdade(ano) {
    if (ano>=1900 && ano <=2005) {
        return `Você é maior de idade, tem ${2022 - ano} anos!`
    } else if (ano >2005 && ano <2022 ){
        return `Você é menor de idade, tem apenas ${2022 - ano} anos!`
    }else if (ano <=1899 ){
        return `Você é um fantasma, saia da internet. Tem ${2022 - ano} anos!`
    }
 } 

    console.log(maiorDeIdade(1999))// Você é maior de idade, tem 23 anos!
    console.log(maiorDeIdade(2009))// Você é menor de idade, tem apenas 13 anos!
    console.log(maiorDeIdade(1545))// Você é um fantasma, saia da internet. Tem 447 anos!
