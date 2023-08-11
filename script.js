const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

let isOpen = false;

menuOpen.addEventListener("click", () => {
 if (!isOpen) {
   overlay.classList.add("overlay--active");
   isOpen = true;
 } else {
   overlay.classList.remove("overlay--active");
   isOpen = false;
 }
});

menuClose.addEventListener("click", () => {
 overlay.classList.remove("overlay--active");
 isOpen = false;
});
window.addEventListener("load", function() {
  const loaderContainer = document.querySelector(".loader-container");
  const body = document.querySelector("body");
  loaderContainer.classList.add("hide");
  body.classList.add("loaded");
});