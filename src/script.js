// -----------------------sticky header -------------------

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".page-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 90) {
      header.className = "page-header-sticky";
    } else {
      header.className = "page-header";
    }
  });
});

//---------------------burger menu----------------------------
const $button = document.querySelector(".page-menu-burger");
const $menu = document.querySelector(".page-menu-list");

$button.addEventListener("click", function () {
    $menu.classList.toggle("show-menu");
    this.classList.toggle("open-menu");
});

// -----------------------carousel----------------------------------
const $slides = document.querySelectorAll(".carousel-slide");
const $leftArrow = document.querySelector(".carousel-arrow-left");
const $rightArrow = document.querySelector(".carousel-arrow-right");

let index = 0;

const moveRight = () => {
  if (index == $slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  setSlide(index);
};

const moveLeft = () => {
  if (index == 0) {
    index = $slides.length - 1;
  } else {
    index--;
  }

  setSlide(index);
};

const setSlide = (index) => {
    $slides.forEach((slide, i) => {
      if (slide.classList.contains("active")) {
        slide.classList.remove("active");
      }
      if (index === i) {
          slide.classList.add("active");
      }
    });
}

$leftArrow.addEventListener("click", () => {
  moveLeft();
  clearInterval(slideInterval);
});

$rightArrow.addEventListener("click", () => {
  moveRight();
  clearInterval(slideInterval);
});

const slideInterval = setInterval(() => {
  moveRight();
}, 2000);
// ----------------------end-of-carousel------------------------------

import Swiper, { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Autoplay
]);

const opinionSwiper = new Swiper(".swiper-container.opinion-section-swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 100,
  speed: 1000,
  height: 330,
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination.opinion-section-pagination",
    clickable: true,
  },
});

const gallerySwiper = new Swiper(".swiper-container.gallery-section-swiper", {
  direction: "horizontal",
  freeMode: true,
  width: 471,
  speed: 500,
  autoHeight: true,
  loop: true,
  loopedSlides: 4,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 1500,
  },
  freeModeMomentum: false,
  pagination: {
    el: ".swiper-pagination.gallery-section-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});