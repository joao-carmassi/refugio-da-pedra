// Dooms -----
const inputCardNext = document.querySelector(".swiper-button-next");

// Vars -----
let x = 0;

// Functions -----
scrowCard();

// Code -----
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 600,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function scrowCard() {
  window.addEventListener("scroll", () => {
    if (x == 0) {
      const intevalorSwiper1 = setInterval(() => {
        inputCardNext.click();
        clearInterval(intevalorSwiper1);
      }, 2500);
      const intevalorSwiper2 = setInterval(() => {
        inputCardNext.click();
        clearInterval(intevalorSwiper2);
      }, 5000);
      x++;
    }
  });
}
