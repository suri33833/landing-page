let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".right-nav");
let navbar = document.querySelector(".navbar");
burger.addEventListener("click", () => {
  navbar.classList.toggle("v-navbar");
  navList.classList.toggle("hidden-item");
  rightNav.classList.toggle("hidden-item");
});

function submitForm() {
  let name =
    document.querySelector("#firstName").value +
    " " +
    document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;
  let contact = document.querySelector("#phone").value;
  alert(`
  Name : ${name}

  Email : ${email}

  Phone Number : ${contact}

  Age : ${age}`);
}
