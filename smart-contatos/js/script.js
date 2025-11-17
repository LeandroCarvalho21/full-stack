const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");


function cadastro(event) {
    event.preventDefault();
    // let li = createElement("li");
    

    // exibi no console
    console.log(inputName.value);
    console.log(inputEmail.value);
    console.log(inputTel.value);
    console.log(event);
    
}
