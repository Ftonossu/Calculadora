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
        atibuicaoDeValores();
    })
}

primeiroValor();




function primeiroValor(){
            for(let i = 0; i < numeros.length; i++){
                numeros[i].addEventListener('click', function(){
                    adicionaValor(numeros[i].value);
                    visor.setAttribute('value', valorVisor1);
                    return valorVisor1;
                })
            }
            function adicionaValor(numero){
                if (valorVisor1 != visorInicial) {
                    valorVisor1 = valorVisor1 + numero;
                }else {
                        valorVisor1 = numero;
                }
            }
        } 
    



function segundoValor(){
    for(let i = 0; i < numeros.length; i++){
        numeros[i].addEventListener('click', function(){
            adicionaValor(numeros[i].value);
            visor.setAttribute('value', valorVisor2);
        })
    }
    function adicionaValor(numero){
        if (valorVisor2 != visorInicial) {
            valorVisor2 = valorVisor2 + numero;
        }else {
                valorVisor2 = numero;
        }
    }
}



let igual = document.querySelector('.igual');


igual.addEventListener('click', function(){
    console.log(valorVisor1);
    console.log(valorVisor2);
    // if (operacao = 'soma'){
    //     resultado = parseFloat(valorVisor1) + parseFloat(valorVisor2);
    //     visor.setAttribute('value', resultado);
    //     operacao = '';
    // }
})



















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