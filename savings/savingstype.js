"use strict";

const personality = document.querySelectorAll(".people");

personality.forEach((btn) => {
  btn.addEventListener("click", () => {
    personality.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
  });
});
