"use-strict";

// for hamburger-menu
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".side-menu");
const overlay = document.querySelector(".box-overlay");
const seeMore = document.querySelector(".seer");
const moreMessage = document.querySelector(".more-messages");
const mark = document.querySelector(".mark-all");
const notification = document.querySelector(".messages");
const clear = document.querySelector(".cleared");
const add = document.querySelector(".plus-option");
const manualBox = document.querySelector(".manually-box");
const closeModal = document.querySelectorAll(".close");
const upload = document.querySelector(".push");
const detailOne = document.querySelector(".modal-details");
const detailTwo = document.querySelector(".modal-details-second");

hamburger.addEventListener("click", (event) => {
  event.stopPropagation();
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.height = "100vh";
});

document.addEventListener("click", (event) => {
  if (!navBar.contains(event.target) && !hamburger.contains(event.target)) {
    // hamburger.classList.remove("active");
    // navBar.classList.remove("active");
  }
});

seeMore.addEventListener("click", () => {
  seeMore.classList.add("active");
  moreMessage.classList.add("active");
});

mark.addEventListener("click", () => {
  mark.classList.add("active");
  notification.classList.add("active");
  clear.classList.add("active");
});

add.addEventListener("click", () => {
  manualBox.classList.add("active");
  overlay.classList.toggle("active");
  document.body.style.height = "100vh";
});

closeModal.forEach((button) => {
  button.addEventListener("click", () => {
    manualBox.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.height = "none";
  });
});

upload.addEventListener("click", () => {
  detailTwo.classList.toggle("active");
  detailOne.classList.toggle("active");
  closeModal.forEach((button) => {
    button.style.pointerEvents = "none";
    button.style.opacity = "0.5";
  });
});
