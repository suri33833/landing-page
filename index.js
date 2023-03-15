let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".right-nav");
let navbar = document.querySelector(".navbar");
burger.addEventListener("click", () => {
  navbar.classList.toggle("v-navbar");
  navList.classList.toggle("hidden-item");
  rightNav.classList.toggle("hidden-item");
});
