// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const value = localStorage.getItem("country");

function save(country_value) {
  localStorage.setItem("country", country_value);
}

function select(country_value) {
  if (country_value === null) {
    return;
  } else {
    save(country_value);
  }
}

function sel_change() {
  const sel_country = document.querySelector("select");
  const value = sel_country.options[sel_country.selectedIndex].value;
  select(value);
}

select(value);
