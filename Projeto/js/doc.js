const teclasNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(teclasNumeros[1])

document.onkeydown = teclado;

function teclado(e){
    for(let i = 0; i < teclasNumeros.length; i++){
        if (e.keyCode == 48 + parseInt(teclasNumeros[i])){
           console.log(teclasNumeros[i])
    }
}
}

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