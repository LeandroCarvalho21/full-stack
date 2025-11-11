// Algoritmo: Converter anos em meses

// Início
//     Declare anos, meses como números

//     Escreva("Digite sua idade em anos: ")
//     Leia anos

//     meses ← anos * 12

//     Escreva("Você tem ", meses, " meses de vida.")
// Fim
let resultado = document.getElementById("resultado")
let anos = Number(prompt("Digite sua idade em anos: "));
let meses = anos * 12
resultado.innerText=meses

console.log(`Você tem ${meses} meses de vida.`);