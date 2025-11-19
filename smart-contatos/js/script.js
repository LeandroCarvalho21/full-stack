const form = document.querySelector("form");
const listaMsg = document.querySelector("#listaMsg")
const lista = document.querySelector(".lista");
const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");


function criarBtn(){
    
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Validação do formulario
    if (inputName.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados");
        return false
    } else if (inputName.value != "" && inputEmail.value != "" && inputTel.value != "") {
        //Criar li com javascript
        const li = document.createElement("li");
        li.innerHTML = `
        <span class = "contato-nome">${inputName.value}</span> 
        <span class = "contato-nome">${inputEmail.value}</span>
        <span class = "contato-nome">${inputTel.value}</span>
        `;

        //Adiciona um o elemento li dentro do ul na lista HTML
        lista.appendChild(li);

        //resetar o formulario
        form.reset();

        //oculta a tag li do HTML
        // listaMsg.style.display = "none";
        listaMsg.remove();


    }
})
