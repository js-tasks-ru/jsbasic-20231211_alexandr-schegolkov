function initCarousel() {
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let carouselInner = document.querySelector(".carousel__inner");
  arrowLeft.style.display = "none";

  let counter = 0; //счётчик перелистаных слайдов

  arrowRight.addEventListener("click", () => {
    counter++;
    carouselInner.style.transform = `translateX(-${
      carouselInner.offsetWidth * counter
    }px)`;
    if (counter != 0) {
      arrowLeft.style.display = "";
      if (counter === 3) {
        arrowRight.style.display = "none";
      }
    }
    console.log(counter);
  });

  arrowLeft.addEventListener("click", () => {
    counter--;
    carouselInner.style.transform = `translateX(-${
      carouselInner.offsetWidth * counter
    }px)`;
    if (counter === 0) {
      arrowLeft.style.display = "none";
    } else if (counter != 3) {
      arrowRight.style.display = "";
    }
  });
}
