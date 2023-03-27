const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const headerTitle = body.querySelector(".title");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

toggle.addEventListener("click", () => {
  headerTitle.classList.toggle("close");
});


let subMenu = document.getElementById("subMenu");

    function toggleMenu(){
      subMenu.classList.toggle("open-menu");
    }