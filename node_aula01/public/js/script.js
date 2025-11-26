let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
let ul = document.querySelector("#links");
let logo = document.querySelector(".logo");
let title = document.querySelector(".title");
let nav = document.getElementsByTagName('nav')[0];

menu.addEventListener('click', () => {
    close.style.display = "block";
    menu.style.display = "none";
    ul.style.display = "block";
    logo.style.display = "none";
    title.style.display = "none";
    nav.style.width = "100%";
    nav.style.color = "red";
    console.log(nav);
})

close.addEventListener('click', () => {
    close.style.display = "none";
    menu.style.display = "block";
    ul.style.display = "none";
    logo.style.display = "block";
    title.style.display = "block";
    nav.style.width = "0%";

})