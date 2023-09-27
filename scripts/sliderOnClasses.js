const defaultImgUrl = "../assets/slide";

const array = [
  `${defaultImgUrl}1.png`,
  `${defaultImgUrl}2.png`,
  `${defaultImgUrl}3.png`,
];

class Slider {
  constructor(container, contentArray) {
    this.contentArray = contentArray;
    this.content = container.querySelector(".slider__content");
    this.leftBtn = container.querySelector("#left");
    this.rightBtn = container.querySelector("#right");
    this.allButtons = [this.leftBtn, this.rightBtn];
    this.indexToShow = 0;
    this.lastIndex = contentArray.length - 1;
    this.urlToImg = this.contentArray[this.indexToShow];
    this.initialize();
  }

  initialize() {
    this.allButtons.forEach((btn) =>
      btn.addEventListener("click", () => this.moveSlider(btn.id))
    );

    this.content.style.backgroundImage = `url(${this.urlToImg})`;
  }

  moveSlider(direction) {
    if (direction === "left") {
      const isFirstIndex = this.indexToShow === 0;

      this.indexToShow = isFirstIndex ? this.lastIndex : this.indexToShow - 1;
    } else {
      const isLastIndex = this.indexToShow === this.lastIndex;

      this.indexToShow = isLastIndex ? 0 : this.indexToShow + 1;
    }

    this.urlToImg = this.contentArray[this.indexToShow];

    this.content.style.backgroundImage = `url(${this.urlToImg})`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Slider(document.querySelector(".slider"), array);
});
