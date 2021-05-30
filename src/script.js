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
