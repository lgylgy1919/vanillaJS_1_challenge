function getRange() {
  const value = document.querySelector("input").value;
  const h3 = document.querySelector("h3");
  h3.innerText = "Generate a number between 0 and " + value;
}
function getComNum() {
  const range = document.querySelector("input").value;
  const comNum = Math.floor(Math.random() * range);
  return comNum;
}
function getUserNum() {
  const userNum = document.getElementById("userNum").value;
  return userNum;
}

function results() {
  const result = document.querySelector(".result");

  const span1 = document.querySelector(".span1");
  const userNumContainer = document.querySelector(".userNumContainer");
  const span2 = document.querySelector(".span2");
  const comNumContainer = document.querySelector(".comNumContainer");
  const winner = document.querySelector(".winner");

  userNum = getUserNum();
  comNum = getComNum();
  span1.innerText = "You chose : ";
  userNumContainer.innerText = userNum;
  span2.innerText = ", machine chose :";
  comNumContainer.innerText = comNum;
  if (Number(userNum) === comNum) {
    winner.innerText = "You win😄";
  } else {
    winner.innerText = "You lost😢";
  }
}
