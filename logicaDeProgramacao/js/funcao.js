let result = document.getElementById("resultado")

//função para times de futebol
function timeFutebol(time) {
    console.log(time);
    document.write(time)
    //    result.innerHTML = (time)
}

//função para pular linha 
function pularLinha() {
    document.write("<br>")
}

//função para exibir a palavra animias
function resultAnimals() {
    console.log("Animais");
    result.innerText = "animais"
}

//para execultar a fução
resultAnimals()
pularLinha();
timeFutebol("Bangu")
pularLinha();
timeFutebol("Palmeiras")
pularLinha();
timeFutebol("Botafogo")
pularLinha();