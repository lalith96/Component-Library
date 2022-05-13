console.log("Inside file")
let starLimit = 0;
const stars = document.querySelectorAll(".rating i");
console.log(stars);
stars.forEach((element, id) => {
  element.addEventListener("click", () => {
    changeRating(id);
  });
  element.addEventListener("mouseover", () => {
    showChange(id);
  });
  element.addEventListener("mouseleave", () => {
    showOriginal(id);
  });
});

function changeRating(num) {
  let index = 0;
  while (index <= num) {
    document.querySelectorAll(".rating i")[index++].style.color = "orange";
  }
  index = num + 1;
  while (index <= 4) {
    document.querySelectorAll(".rating i")[index++].style.color =
      "var(--gray-color)";
  }
  starLimit = num + 1;
}

function showChange(num) {
  console.log("Inside change");
  let index = 0;
  while (index <= num) {
    document.querySelectorAll(".rating i")[index++].style.color = "orange";
  }
}

function showOriginal(num) {
  let index = starLimit;
  while (index <= num) {
    document.querySelectorAll(".rating i")[index++].style.color =
      "var(--gray-color)";
  }
}
