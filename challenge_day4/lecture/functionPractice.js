const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*
function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.classsName = CLICKED_CLASS;
  } else {
    title.classNmae = "";
  }
}
*/

/*
function handleClick(){
  const currentClass = title.className;
  if(currentClass !== CLICKED_CLASS){
    title.classList.add(CLICKED_CLASS)
  } else{
    title.classList.remove(CLICKED_CLASS)
  }
}
*/

/*
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}
*/

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
