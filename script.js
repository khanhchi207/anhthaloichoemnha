"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Em iu anh bé ,Em hứa hongg làm anh bé buồn nữa đouuu :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}
yesBtn.addEventListener("click", () => {
  question.innerHTML = tôiy 🥺<br>dỗiiii x1 tỷ";
  gif.src =
    "https://media.giphy.com/media/2weSkZg9hvQW5Zv2fk/giphy.gif";

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Em bicc lỗi rồi ạa",
    "Mong anh bé tha lỗi choo emmmm :((",
    "Emmm saii rồi , emm đáng trách ạ",
    "Anh bé đừng giận emm nữa nhoo",
    "em iu anh bé nhắm nhunnn đóoooo",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  gif.src = https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDg2N2JxMnc0bmVhcHRlcmx0anoydW9jaTF5Z3FvNXJvOTJ0YzltdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KztT2c4u8mYYUiMKdJ/giphy.gif;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
