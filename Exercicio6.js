//crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converteDiasHora(dia){
    const horas = 24 * dia
        return `${dia} dias equivalem a ${horas} horas.`
}

console.log(converteDiasHora(2))// 2 dias equivalem a 48 horas.
console.log(converteDiasHora(15))// 15 dias equivalem a 360 horas.