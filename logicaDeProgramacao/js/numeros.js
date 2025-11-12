// Enunciado:
// Crie um programa que peça um número e mostre uma mensagem 
// dizendo se ele é positivo, negativo ou igual a zero.

//declarando variaveis
let numero = Number(prompt("Digite um número"));
let result = document.getElementById("resultado")

//estrutura de controle
if (numero > 0) {
    result.innerText = ("positivo");
    console.log("positivo")
} else if (numero === 0) {
    result.innerText = ("igual a zero");
    console.log("igual a zero")

} else {
    result.innerText = ("negativo");
    console.log("negativo")
}