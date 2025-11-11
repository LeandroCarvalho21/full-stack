/*vamos criar um programa, que o usuário executa uma função
e dentro dessa função existe uma frase. 
pode pular linha */

function frase(frase) {
    document.write(frase);
}

function pularLinha() {
    document.write("<br>");
}

//chama a função 
frase("teste");
pularLinha();
pularLinha();
frase("teste");
