var numeroSecreto = parseInt(Math.random() *21)

function Chutar() {
   var elementoResultado = document.getElementById('resultado')
    var chute = parseInt(document.getElementById('valor').value)
    
    console.log(chute)
    if (chute == numeroSecreto) {
       elementoResultado.innerHTML =`Você acertou! Número secreto é ${numeroSecreto}!`
    } else if (chute > 20 || chute < 0) {
        elementoResultado.innerHTML ='Você deve digitar um número entre 0 a 20'
    } else {
        elementoResultado.innerHTML =`Você errou! Boa sorte na próxima!`
    }
}