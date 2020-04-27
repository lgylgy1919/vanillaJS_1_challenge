// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountry() {
  const selectCountry = select.value;
  const currentCountry = localStorage.getItem("country", selectCountry);
  if (currentCountry !== null) {
    select.value = currentCountry;
  }
}

function init() {
  loadCountry();
  select.addEventListener("change", handleChange);
}
init();
