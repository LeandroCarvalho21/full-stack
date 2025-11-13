/*
  Vamos criar um programa, de pontos ganhos do seu time em jogos de futebol
*/

/*
Pesando no programa:
1- Criar uma variavel vitorias, perguntando para o usuario, quantos jogos se time venceu
2- Criar outra variavel empates, perguntando quanto jogos o time empatou
3 - Criar uma variavel de pontos (multiplicar a variavel vitorias * 3) e somar com a variavel empates;
4 - Mostrar na tela esse resultado
*/

/*
Implementar condições,

Se os pontos for maior que 10:
Mostrar a mensagem, "Seu time está indo bem"

Se os pontos for menor que 5:
Mostrar a mensagem, "Seu time precisa melhorar"

*/

//declarando as variaveis 
let result = document.getElementById("resultado");
const vitorias = Number(prompt("Quantos jogos se time venceu: "));
const empate = Number(prompt("Quantos jogos o seu time empatou: "));
let pontos = (vitorias * 3 + empate);

result.innerText = (`Seu time está indo bem ele tem: ${pontos} pontos`)
console.log(`seu time tem: ${pontos} pontos`);

function mostrarTela(msg) {
    result.innerText = (`${msg}`)
}

if (pontos > 10) {
    mostrarTela(`Seu time está indo bem ele tem: ${pontos} pontos`);
} else if (pontos < 5) {
    mostrarTela(`Seu time precisa melhorar ele tem: ${pontos} pontos`);
} else {
    mostrarTela(`Seu time esta no caminho ${pontos} pontos`);
}