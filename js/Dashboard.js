const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const headerTitle = body.querySelector(".title");
let subMenu = document.getElementById("subMenu");
const menuSideBar = body.querySelector(".my-menu-bar");


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

toggle.addEventListener("click", () => {
  headerTitle.classList.toggle("close");
});


function toggleMenu(){
  subMenu.classList.toggle("open-menu");
}

function sideBarClose(){
  sidebar.style.width = "0px";
  sidebar.style.overflow = "hidden";
  sidebar.style.opacity = "0";
}

function sideBarOpen(){
  sidebar.style.width = "250px";
  sidebar.style.opacity = "1";
}