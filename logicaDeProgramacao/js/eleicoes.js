// Algoritmo: Anos de Eleições

// Início
//     Declare anoInicio, anoAtual como números
//     anoAtual ← 2025

//     Escreva("Digite o ano da primeira eleição que você acompanhou:")
//     Leia anoInicio

//     Enquanto anoInicio ≤ anoAtual faça
//         Escreva("Ano de eleição: ", anoInicio)
//         anoInicio ← anoInicio + 2
//     FimEnquanto
// Fim

//pede para usuário digitar a data de inicio 
let anoInicio = Number(prompt("Digite o ano da primeira eleição que você acompanhou:"));

// pega o ano atual
let anoAtual = new Date().getFullYear();

while (anoInicio < anoAtual) {
    console.log(`Ano de eleição:  ${anoInicio}`);
    anoInicio = anoInicio + 2;
}

// function addtags() {
//     let divhtml = document.getElementById("resultTarefas");
//     let h3 = document.createElement("h3");
//     h3.appendChild(`Ano de eleição:  ${anoInicio}`);
// }