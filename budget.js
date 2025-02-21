"use-strict";

// for hamburger-menu
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".side-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  // document.body.style.overflow = "hidden";
  // document.body.style.height = "100vh";
});

document.querySelectorAll(".original").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    // document.body.style.overflow = "auto";
    // document.body.style.height = "100%";
  })
);
