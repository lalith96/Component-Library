const changeClass = (newClass) => {
  document.getElementsByClassName("card")[0].className = `card ${newClass}`;
};

const changeTitle = (title) => {
  document.getElementById("title").innerHTML = title;
};

const changeDescription = (description) => {
  document.getElementById("description").innerHTML = description;
};

const changeCard = (value) => {
  switch (value) {
    case "1":
      changeClass("card-badge");
      changeTitle("Card with Badge");
      changeDescription("Card with badge, image and vertical aligned content.");
      break;
    case "2":
      changeClass("card-dismiss");
      changeTitle("Card with Dismiss");
      changeDescription(
        "Card with Dismiss, image and vertical aligned content."
      );
      break;
    case "3":
      changeClass("card-overlay");
      changeTitle("Card with Text overlay");
      changeDescription(
        "Card with text overlay, image and vertical aligned content."
      );
      break;
    case "4":
      changeClass("text-card");
      changeTitle("Card with only Text");
      changeDescription("Card with only text and vertical aligned content.");
      break;
    case "5":
      changeClass("card-horizontal");
      changeTitle("Horizontal Card");
      changeDescription("Card with image and horizontal aligned content.");
      break;
    case "6":
      changeClass("card-shadow");
      changeTitle("Card with shadow");
      changeDescription("Card with shadow, image and vertical aligned content");
      break;
  }
};
