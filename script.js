"use-strict";

// get hold of barsicon div that contains the icon
document.querySelector(".barsicon").addEventListener("click", function() {
    const navlinks = document.querySelector("nav");
    navlinks.classList.toggle("show")
});

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
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const spanClose = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
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

// from B VID
const autoSlide = () => plusSlides(1);
setInterval(autoSlide, 6000);

const plusSlides = (n) => showSlides((slideIndex += n));

const currentSlide = (n) => showSlides((slideIndex = n));

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    // commented out from B Vid:
    /*
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }*/

   // and replaced with:
   slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

    // cant loop over htmlcollection w for each method
    // as an alternative, Array.from() is used to convert an html collection into an array

    slides.forEach((slide)=> (
        slide.style.display = "none"
    ));

    // array.from removed from B vid
    dots.forEach((dot) =>
        dot.classList.remove(".dActive"));

    // show current slides and set the corresponding dots

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add(".dActive");
}