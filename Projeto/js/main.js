let visor = document.querySelector('.visor');
const numeros = document.querySelectorAll('.numero');
let visorInicial = visor.value;


const operadores = document.querySelectorAll('.operador');
let valorVisor1 = visorInicial;
let valorVisor2 = visorInicial;
let operacao = '';
let resultado = '';

for(let i = 0; i < operadores.length; i++){
    operadores[i].addEventListener('click', function(){
        operacao = operadores[i].value;

    })
}

for(let i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', function(){
        
        if(operacao == '') {
            mostraValor1(numeros[i]);
        } else {
            mostraValor2(numeros[i]);
        }    

    })}

function mostraValor1(numeros){
    adicionaValor1(numeros.value);
    visor.setAttribute('value', valorVisor1);
    return valorVisor1;
}

function adicionaValor1(numero){
    if (valorVisor1 != visorInicial) {
        valorVisor1 = valorVisor1 + numero;
    }else {
        valorVisor1 = numero;
    }
}

function mostraValor2(numeros){
    adicionaValor2(numeros.value);
    visor.setAttribute('value', valorVisor2);
}

function adicionaValor2(numero){
    if (valorVisor2 != visorInicial) {
        valorVisor2 = valorVisor2 + numero;
    } else {
        valorVisor2 = numero;
    }
}

let igual = document.querySelector('.igual');

igual.addEventListener('click', function(){
    if(operacao == ''){
        visor.setAttribute('value', valorVisor1);
    }
    else if (operacao == 'soma'){
        resultado = parseFloat(valorVisor1) + parseFloat(valorVisor2);
        visor.setAttribute('value', resultado);
        resetCalc();
    } else if (operacao == 'subtracao'){
        resultado = parseFloat(valorVisor1) - parseFloat(valorVisor2);
        visor.setAttribute('value', resultado);
        resetCalc();
    } else if (operacao == 'multiplicacao'){
        resultado = parseFloat(valorVisor1) * parseFloat(valorVisor2);
        visor.setAttribute('value', resultado);
        resetCalc();
    } else {
        resultado = parseFloat(valorVisor1) / parseFloat(valorVisor2);
        visor.setAttribute('value', resultado);
        resetCalc();
    }
})

function resetCalc(){
    operacao = '';
    valorVisor1 = resultado;
    valorVisor2 = 0;
}

const reset = document.querySelector('.reset')

reset.addEventListener('click', function(){
    valorVisor1 = visorInicial;
    valorVisor2 = visorInicial;
    visor.setAttribute('value', valorVisor1);
    operacao = '';
})

const ponto = document.querySelector('.ponto')

ponto.addEventListener('click', function(){
    valorVisor1 = valorVisor1 + ".";
    visor.setAttribute('value', valorVisor1);
})

// let documento = document.querySelector('body')
// documento.addEventListener('keypress', function (event) {
//     const key = event.key;
//     const code = event.keyCode;
//     console.log(`Key: ${key}, Code ${code}`);
//   });