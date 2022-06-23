let visor = document.querySelector('.visor');
const numeros = document.querySelectorAll('.numero');
let visorInicial = visor.value;


const operadores = document.querySelectorAll('.operador');
let valorVisor1 = visorInicial;
let valorVisor2 = visorInicial;
let operacao = '';

atibuicaoDeValores();

function atibuicaoDeValores(){

    if (operacao == 'soma'){
        for(let i = 0; i < numeros.length; i++){
            numeros[i].addEventListener('click', function(){
                adicionaValor(numeros[i].value);
                visor.setAttribute('value', valorVisor1);
                console.log(operacao)
            })
        }
        function adicionaValor(numero){
            if (valorVisor1 != visorInicial) {
                valorVisor1 = valorVisor1 + numero;
            }else {
                    valorVisor1 = numero;
            }
        }
    } else {
        console.log('mudou')
    }
}

for(let i = 0; i < operadores.length; i++){
    operadores[i].addEventListener('click', function(){
        operacao = operadores[i].value;
    })
}



let igual = document.querySelector('.igual');






















const reset = document.querySelector('.reset')

reset.addEventListener('click', function(){
    valorVisor1 = visorInicial;
    visor.setAttribute('value', valorVisor1);
    operacao = '';
})

