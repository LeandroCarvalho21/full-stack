const form = document.querySelector("form");
const listaMsg = document.querySelector("#listaMsg")
const lista = document.querySelector(".lista");
const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Validação do formulario
    if (inputName.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados");
        return false
    } else if (inputName.value != "" && inputEmail.value != "" && inputTel.value != "") {

        //Criar li com javascript
        const li = document.createElement("li");

        //Remove a li com JS
        listaMsg.remove();

        //Criando botão excluir
        const btnExcluir = document.createElement("Button"); //Criando um button
        btnExcluir.textContent = "Excluir"; //Adicionando conteudo no button
        btnExcluir.className = "btn-delete"; //Criando uma class

        //função excluir
        btnExcluir.addEventListener("click", function () {
            const confirmar = confirm("Tem certeza que deseja excluir esse contato?")
            if (confirmar) {
                li.remove();
            }
        });

        li.innerHTML = `
        <span class = "contato-nome">${inputName.value}</span> 
        <span class = "contato-nome">${inputEmail.value}</span>
        <span class = "contato-nome">${inputTel.value}</span>
        `;

        //Adiciona um o elemento li dentro do ul na lista HTML
        lista.appendChild(li);
        li.appendChild(btnExcluir)

        //resetar o formulario
        form.reset();

        //oculta a tag li do HTML
        // listaMsg.style.display = "none";

    }
})
