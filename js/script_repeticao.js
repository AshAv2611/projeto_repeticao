//PEGANDO ELEMENTOS DO DOM
const divFor = document.querySelector('#div-for')

//ESTRUTURAS DE REPETIÇÕES
// TODA E QUALQUER ESTRUTURA DE REPETIÇÃO, OBRIGATORIAMENTE TEM QUE TER UMA CONDIÇÃO DE PARADA

//ESTRUTURAS DE REPETIÇÕES
for (i = 0; i < 10; i++){
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}


//CONTADOR E ACUMULADOR
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')
let cont = 0
let acum = 0.0
btnNum1.addEventListener('click',(evt)=> {
    let numDigitado = Number (inputNum1.value)

    cont++
    acum += numDigitado

    divResult.innerHTML = `Total de número digitado ${cont} <br> A soma dos números digitados ${acum}`
})