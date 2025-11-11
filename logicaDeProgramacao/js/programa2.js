// Início
//     Declare numero como número

//     Função MostraDobro(valor)
//         Escreva("O dobro de ", valor, " é ", valor * 2)
//     FimFunção

//     Escreva("Digite um número: ")
//     Leia numero

//     Chame MostraDobro(numero)
// Fim

//função para mostrar o dobro do valor que o usuário digitar. 
function mostrarDobro(valor) {
    document.write(`O dobro de ${numero} é ${valor * 2}`);
    result.innerText = (`O dobro de ${numero} é ${ valor * 2}`)
}

//declaração das variaveis 
let result = document.getElementById("resultado");
let numero = Number(prompt("Digite um número: "));

//chama a função 
mostrarDobro(numero);
