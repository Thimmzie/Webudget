"use strict";

// for target type clicked state

const buttons = document.querySelectorAll(".typebtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const click = document.querySelectorAll(".choicebtn");

click.forEach((btn) => {
  btn.addEventListener("click", () => {
    click.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// input field prompt

const input = document.querySelector("#ic");
const prompt = document.querySelector(".prompt");
const defaultText = prompt.innerHTML;

input.addEventListener("input", () => {
  const value = Number(input.value);

  if (value > 20000) {
    prompt.innerHTML = "✅ This is a good saving plan, keep it up!";
  } else {
    prompt.innerHTML = defaultText;
  }
});
