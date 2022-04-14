//1 - Elabore um algoritmo que receba um número (1-7) 
//e devolva o dia da semana correspondente.

function diaSemana(dia) {

  if (dia === 1) {
   return 'É domingo, bora fazer faxina'
 } else if (dia === 2){
  return 'Segundou, vamos trabalhar'
 } else if (dia === 3){
  return 'Terça é um dia incrivel'
 } else if (dia === 4){
   return 'Hoje é Quarta, use rosa'
} else if (dia === 5){
    return 'É quinta feira, bora abalar'
} else if (dia === 6){
   return 'Sextou - chama as amigas'
 } else if (dia === 7) {
  return 'É sabado garota, dia de Reprograma'
 }

}

     console.log (diaSemana(4))//Hoje é quarta, use rosa.
     console.log (diaSemana(7))//É sabado garota, dia de Reprograma