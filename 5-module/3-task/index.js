function initCarousel() {
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let carouselInner = document.querySelector(".carousel__inner");
  let slideWidth = carouselInner.offsetWidth;
  let slideTwo = slideWidth;
  let slideThree = slideWidth * 2;
  let slideFour = slideWidth * 3;

  arrowLeft.style.display = "none";

  arrowRight.addEventListener("click", () => {
    if (carouselInner.style.transform == 0) {
      let widthRight = slideWidth;
      carouselInner.style.transform = `translateX(-${widthRight}px)`;
      arrowLeft.style.display = "";
    } else if (carouselInner.style.transform == `translateX(-${slideTwo}px)`) {
      let widthRight = 2 * slideWidth;
      carouselInner.style.transform = `translateX(-${widthRight}px)`;
    } else if (
      carouselInner.style.transform == `translateX(-${slideThree}px)`
    ) {
      let widthRight = 3 * slideWidth;
      carouselInner.style.transform = `translateX(-${widthRight}px)`;
      arrowRight.style.display = "none";
      arrowLeft.style.display = "";
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (carouselInner.style.transform == `translateX(-${slideTwo}px)`) {
      carouselInner.style.transform = `translateX(0px)`;
      arrowLeft.style.display = "none";
    } else if (
      carouselInner.style.transform == `translateX(-${slideThree}px)`
    ) {
      let widthLeft = slideWidth;
      carouselInner.style.transform = `translateX(${-widthLeft}px)`;
    } else if (carouselInner.style.transform == `translateX(-${slideFour}px)`) {
      let widthLeft = 2 * slideWidth;
      carouselInner.style.transform = `translateX(${-widthLeft}px)`;
      arrowRight.style.display = "";
    }
  });
}
