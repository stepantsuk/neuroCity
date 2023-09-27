const array = [1, 2, 3, 4, 5];

let slideToShow = 0;

const leftBtn = document.querySelector("#left");

const rightBtn = document.querySelector("#right");

const btnsArr = [leftBtn, rightBtn];

const sliderFrame = document.querySelector(".slider__content");

sliderFrame.textContent = array[slideToShow];

const moveSlider = (direction) => {
  const lastIndex = array.length - 1;

  if (direction === "left") {
    const isFirstIndex = slideToShow === 0;

    slideToShow = isFirstIndex ? lastIndex : slideToShow - 1;
  } else {
    const isLastIndex = slideToShow === lastIndex;

    slideToShow = isLastIndex ? 0 : slideToShow + 1;
  }

  sliderFrame.textContent = array[slideToShow];
};

btnsArr.forEach((btn) =>
  btn.addEventListener("click", () => moveSlider(btn.id))
);
