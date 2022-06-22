let visor = document.querySelector('.visor');
const numeros = document.querySelectorAll('.numero');

let igual = document.querySelector('.igual')
console.log(igual)


for(let i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', function(){
    
        visor.setAttribute('value', numeros[i].value)
        console.log(numeros[i].value)
    })
}
