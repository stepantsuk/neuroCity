const frame = document.querySelector(".frame");

const randomFn = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
};

const quantity = randomFn(10, 100);
console.log("quantity", quantity);

for (let index = 1; index <= quantity; index++) {
  let block = document.createElement("div");
  block.classList.add("item");
  block.textContent = index;
  frame.appendChild(block);
}
