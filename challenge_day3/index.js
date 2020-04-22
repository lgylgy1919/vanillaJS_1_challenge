// const title = document.getElementById("title");
const title = document.querySelector("#title");
// title.innerHTML = "Hi!From JS";
// console.log(title);
// console로 할 수 있는 것들 출력
// console.dir(document);

// title.style.color = "red";
// document.title = "I own you now";

function handleResize() {
  console.log("It has been resized");
}
function handleClick() {
  title.style.color = "skyblue";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
