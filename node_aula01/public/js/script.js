let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
let ul = document.querySelector("#links");

menu.addEventListener('click', () => {
    if (menu == menu) {
        close.style.display = "block";
        menu.style.display = "none";
        ul.style.display = "block";
    }
})

close.addEventListener('click', () => {
    if (close == close) {
        close.style.display = "none";
        menu.style.display = "block";
         ul.style.display = "none";
    }
})