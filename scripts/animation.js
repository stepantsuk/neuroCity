const button = document.querySelector(".animationBtn");
const circle = document.querySelector(".circle");
const triangle = document.querySelector(".triangle");
const square = document.querySelector(".square");
const rectangle = document.querySelector(".rectangle--animated");

const startStop = () => {
  let period = button.textContent;

  const isStart = period === "start";

  switch (true) {
    case isStart:
      circle.classList.add("pulsation");
      triangle.classList.add("forwardBack");
      square.classList.add("spining");
      rectangle.classList.add("spining3d");
      button.textContent = "end";
      break;
    default:
      circle.classList.remove("pulsation");
      triangle.classList.remove("forwardBack");
      square.classList.remove("spining");
      rectangle.classList.remove("spining3d");
      button.textContent = "start";
      break;
  }
};

button.addEventListener("click", startStop);
