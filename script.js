"use-strict";


// get hold of barsicon div that contains the icon

document.querySelector(".barsicon").addEventListener("click", function() {
    const navlinks = document.querySelector("nav");
    navlinks.classList.toggle("show")
});


/*
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".Alink-nav active").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    unscroll.classList.remove("active");
  })
);
*/

// OFFERS GRID FUNCTIONS - MODALS

// A:
// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src; // to get the image link
  captionText.innerHTML = this.alt; // to get the caption
}

// create a variable for the <span> element that closes the modal
const spanClose = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), it closes the modal
spanClose.onclick = function() {
  modal.style.display = "none";
}

// B:
// Get the modal
const modalB = document.getElementById("myModalB");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgB = document.getElementById("myImgB");
const modalImgB = document.getElementById("img01B");
const captionTextB = document.getElementById("captionB");
imgB.onclick = function() {
  modalB.style.display = "block";
  modalImgB.src = this.src;
  captionTextB.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const spanCloseB = document.getElementsByClassName("closeB")[0];

// When the user clicks on <span> (x), close the modal
spanCloseB.onclick = function() {
  modalB.style.display = "none";
}

// C:
// Get the modal
const modalC = document.getElementById("myModalC");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgC = document.getElementById("myImgC");
const modalImgC = document.getElementById("img01C");
const captionTextC = document.getElementById("captionC");
imgC.onclick = function() {
  modalC.style.display = "block";
  modalImgC.src = this.src;
  captionTextC.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const spanCloseC = document.getElementsByClassName("closeC")[0];

// When the user clicks on <span> (x), close the modal
spanCloseC.onclick = function() {
  modalC.style.display = "none";
}

// D:
// Get the modal
const modalD = document.getElementById("myModalD");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgD = document.getElementById("myImgD");
const modalImgD = document.getElementById("img01D");
const captionTextD = document.getElementById("captionD");
imgD.onclick = function() {
  modalD.style.display = "block";
  modalImgD.src = this.src;
  captionTextD.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const spanCloseD = document.getElementsByClassName("closeD")[0];

// When the user clicks on <span> (x), close the modal
spanCloseD.onclick = function() {
  modalD.style.display = "none";
}



// Accomplish scroll

let slideIndex = 1;
showSlides(slideIndex);

const autoSlide = () => plusSlides(1);
setInterval(autoSlide, 10000);

const plusSlides = (n) => showSlides((slideIndex += n));

const currentSlide = (n) => showSlides((slideIndex = n));

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

   slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

    slides.forEach((slide)=> (
        slide.style.display = "none"
    ));

    dots.forEach((dot) =>
        dot.classList.remove(".dActive"));

    // show current slides and set the corresponding dots

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add(".dActive");
}