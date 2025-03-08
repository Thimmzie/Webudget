const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".site-navigations");
const overlay = document.querySelector(".box-overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  document.body.style.height = "100vh";
  overlay.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    overlay.classList.remove("active");
    unscroll.classList.remove("active");
  })
);
