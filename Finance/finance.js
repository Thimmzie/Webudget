"use-strict";

// for hamburger-menu
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".side-menu");

hamburger.addEventListener("click", (event) => {
  event.stopPropagation();
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  // document.body.style.overflow = "hidden";
  // document.body.style.height = "100vh";
});

document.addEventListener("click", (event) => {
  if (!navBar.contains(event.target) && !hamburger.contains(event.target)) {
    // hamburger.classList.remove("active");
    // navBar.classList.remove("active");
  }
});
