const all = document.querySelector(".principal");
const card2 = document.querySelector(".about");
const design = document.querySelector(".design");
const pages = document.querySelector(".pages");
const contact = document.querySelector(".contact");

// skill----------------
function frontS() {
  all.classList.remove("active");
  all.classList.add("inactive");

  card2.classList.toggle("inactive");
  card2.classList.toggle("active");

  design.classList.add("inactive");
  design.classList.remove("active");

  pages.classList.add("inactive");
  pages.classList.remove("active");

  contact.classList.add("inactive");
  contact.classList.remove("active");
}
// skill----------------

// design----------------
function portD() {
  all.classList.remove("active");
  all.classList.add("inactive");

  design.classList.toggle("inactive");
  design.classList.toggle("active");

  card2.classList.add("inactive");
  card2.classList.remove("active");

  pages.classList.add("inactive");
  pages.classList.remove("active");

  contact.classList.add("inactive");
  contact.classList.remove("active");
}
// design----------------

// code-------------------
function portP() {
  all.classList.remove("active");
  all.classList.add("inactive");

  design.classList.add("inactive");
  design.classList.remove("active");

  pages.classList.toggle("inactive");
  pages.classList.toggle("active");

  card2.classList.add("inactive");
  card2.classList.remove("active");

  contact.classList.add("inactive");
  contact.classList.remove("active");
}
// code-------------------

// contact-------------------
function frontC() {
  all.classList.remove("active");
  all.classList.add("inactive");

  design.classList.add("inactive");
  design.classList.remove("active");

  contact.classList.toggle("inactive");
  contact.classList.toggle("active");

  pages.classList.add("inactive");
  pages.classList.remove("active");

  card2.classList.add("inactive");
  card2.classList.remove("active");
}
// contact-------------------

// removeBack -------------------
function back() {
  card2.classList.remove("active");
  card2.classList.add("inactive");

  all.classList.toggle("active");
  all.classList.toggle("inactive");

  design.classList.remove("active");
  design.classList.add("inactive");

  pages.classList.add("inactive");
  pages.classList.remove("active");

  contact.classList.add("inactive");
  contact.classList.remove("active");
}
// removeBack -------------------

// CopyPaper ---------------
function copy() {
  let url = document.querySelector(".gmail");
  let msj = document.querySelector(".mensaje");

  navigator.clipboard.writeText(url.textContent);
  msj.innerHTML = "Gmail Copiado!";

  setTimeout(() => (msj.textContent = ""), 2000);
}
// CopyPaper ---------------

// PortMenu ---------------
const list = document.querySelectorAll(".list");

list.forEach(function (item) {
  const portMenu = item.querySelector(".port");
  const check = item.querySelector(".menu");

  check.addEventListener("click", () => {
    portMenu.classList.toggle("in-menu");
  });
});
// PortMenu ---------------

// alert-----
function alert() {
  alert('Por Ahora son todas las que hay');
}
// alert-----

