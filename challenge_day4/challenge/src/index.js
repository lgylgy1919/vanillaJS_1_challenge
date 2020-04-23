// // <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// // <⚠️ /DONT DELETE THIS ⚠️>

const colors = ["#2d8ed6", "#914EAD", "#EEBC12"];

function screenwidth() {
  const wide = window.innerWidth;
  if (wide <= "700") {
    document.body.style.backgroundColor = colors[0];
  } else if (wide > "700" && wide <= "1200") {
    document.body.style.backgroundColor = colors[1];
  } else {
    document.body.style.backgroundColor = colors[2];
  }
}

function init() {
  window.addEventListener("resize", screenwidth);
}

init();
