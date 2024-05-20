//class active
const navbarNav = document.querySelector(".navbar-nav");

//Humberger di click
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click diluar sidebar
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
