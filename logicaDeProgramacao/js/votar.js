// Enunciado:
// Crie um programa que peça a idade de uma pessoa e mostre 
// uma mensagem dizendo se ela pode votar ou ainda não pode votar.

// ✅ Desafio extra:

// Adicione mais uma condição:

// Se a idade for menor que 16, mostre "Não pode votar".

// Se for entre 16 e 17, mostre "Voto opcional".

// Se for 18 ou mais, mostre "Voto obrigatório".

let result = document.getElementById("resultado");
let idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
    console.log("Pode votar");
    result.innerText = ("Voto obrigatório");
} else if (idade >= 16 && idade <= 17) {
    console.log("Voto opcional");
    result.innerText = ("Voto opcional");
}
else {
    console.log("Não pode votar");
    result.innerText = ("Não pode votar");
}
