let starLimit = 0;
const stars = document.querySelectorAll(".rating i");
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
    document.getElementsByTagName("i")[index++].style.color = "orange";
  }
  index = num + 1;
  while (index <= 4) {
    document.getElementsByTagName("i")[index++].style.color =
      "var(--gray-color)";
  }
  starLimit = num + 1;
}

function showChange(num) {
  let index = 0;
  while (index <= num) {
    document.getElementsByTagName("i")[index++].style.color = "orange";
  }
}

function showOriginal(num) {
  let index = starLimit;
  while (index <= num) {
    document.getElementsByTagName("i")[index++].style.color =
      "var(--gray-color)";
  }
}
