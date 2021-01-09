const menuBtn = document.querySelector("#menu-btn");
const burger = document.querySelector("#burger");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

let showMenu = false;

menuBtn.addEventListener("click", dropdown);
ul.addEventListener("click", off);

function dropdown() {
  if(!showMenu) {
    // animacion menu burger
    burger.classList.add("open");
    // menu content - ul
    ul.style.display = "block";
    ul.classList.add("open");
    li.forEach(item => item.classList.add('open'));
    showMenu = true;

  } else {
    // animacion menu burger
    burger.classList.remove("open");
    // menu content - ul
    ul.style.display = "";
    ul.classList.remove("open");
    showMenu = false;
  }
}

function off() {
    burger.classList.remove("open");
    ul.classList.remove("open");
    ul.style.display = "";
    showMenu = false;
}
