// 🍎 Exercício: Verificar se o aluno foi aprovado

// Enunciado:
// Crie um programa que peça a nota de um aluno (de 0 a 10) e mostre:

// "Aprovado" se a nota for maior ou igual a 6

// "Recuperação" se a nota for entre 4 e 5.9

// "Reprovado" se a nota for menor que 4
//declarando as variaveis
let nota = Number(prompt("Digite a nota do aluno "));
let result = document.getElementById("resultado");

if (nota >= 6 && nota <= 10) {
    result.innerText = ("Aprovado");
} else if (nota >= 4 && nota <= 5.9) {
    result.innerText = ("Recuperação");
} else if (nota > 10 || nota < 0) {
    result.innerText = ("Digite um número entre 0 e 10");
} else {
    result.innerText = ("Reprovado");
}