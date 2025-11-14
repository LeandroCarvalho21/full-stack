// declarando as variaveis 
let result = document.getElementById("resultado");
let contador = 1;

while (contador < 10) {
    contador++
    console.log(`Número: ${contador}`)
    result.innerText = (`Número: ${contador}`)
}
