const images = document.querySelectorAll(".image-container img");
const popUp = document.querySelector(".popup-image");
const popUpImage = document.querySelector(".popup-image img");

images.forEach((item) => {
  item.addEventListener("click", function () {
    popUp.style.display = "block";
    popUpImage.src = item.getAttribute("src");
  });
});

const close = document.querySelector(".popup-image span");
close.addEventListener("click", function () {
  popUp.style.display = "none";
});
