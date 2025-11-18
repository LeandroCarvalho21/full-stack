const form = document.querySelector("form");
const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Validação do formulario
    if (inputName.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados");
        return false
    }
    alert("Dados cadastrados");
    console.log(inputName.value);
    console.log(inputEmail.value);
    console.log(inputTel.value);

})
