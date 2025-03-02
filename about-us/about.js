const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".site-navigations");
const overlay = document.querySelector(".box-overlay");
const unscroll = document.querySelector(".unscroll");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  document.body.style.height = "100vh";
  overlay.classList.toggle("active");
  document.body.classList.add("unscroll");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    overlay.classList.remove("active");
    unscroll.classList.remove("active");
    document.body.classList.remove("unscroll");
  })
);
