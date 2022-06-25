if(operador == ''){
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
} else{
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