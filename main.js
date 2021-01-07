const menuBtn = document.querySelector("#menu-btn");
const burger = document.querySelector("#burger");
const ul = document.querySelector("ul");
const menu_content = document.querySelector("#menu-content");
const link = document.querySelectorAll(".nav-link");
const li = document.querySelectorAll("li");

let showMenu = false;

menuBtn.addEventListener("click", dropdown);
ul.addEventListener("click", off);

function dropdown() {
  if(!showMenu) {
    // animacion menu burger
    burger.classList.add("open");
    // menu content - ul
    menu_content.style.display = "block";
    menu_content.classList.add("open");
    li.forEach(item => item.classList.add('open'));
    showMenu = true;

  } else {
    // animacion menu burger
    burger.classList.remove("open");
    // menu content - ul
    menu_content.style.display = "";
    menu_content.classList.remove("open");
    showMenu = false;
  }
}

function off() {
    burger.classList.remove("open");
    menu_content.classList.remove("open");
    menu_content.style.display = "";
    showMenu = false;
}
