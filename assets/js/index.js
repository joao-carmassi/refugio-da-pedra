const header = document.querySelector("header");

// window.addEventListener("scroll", mostraHeader);

function mostraHeader() {
  if (window.scrollY > 0) {
    header.classList.add("mostra-header");
  } else {
    header.classList.remove("mostra-header");
  }
}
