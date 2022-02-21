let starLimit = 0;
const stars = document.querySelectorAll("i");
stars.forEach((element, id) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    changeRating(id + 1);
  });
  element.addEventListener("mouseover", (e) => {
    e.preventDefault();
    showChange(id + 1);
  });
  element.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    showOriginal(id + 1);
  });
});

function changeRating(num) {
  let index = 0;
  while (index < num) {
    document.getElementsByTagName("i")[index++].style.color = "orange";
  }
  index = num;
  while (index < 5) {
    document.getElementsByTagName("i")[index++].style.color = "gray";
  }
  starLimit = num;
}

function showChange(num) {
  let index = 0;
  while (index < num) {
    document.getElementsByTagName("i")[index++].style.color = "orange";
  }
}

function showOriginal(num) {
  let index = starLimit;
  while (index < num) {
    document.getElementsByTagName("i")[index++].style.color = "gray";
  }
}
