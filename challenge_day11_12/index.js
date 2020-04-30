let obj = "";
let storage;
let operator;

function save() {
  storage = Number(obj);
}
function inputNum(number) {
  const num = number;
  obj += num;
  document.querySelector(".screen").innerText = obj;
  if (typeof storage === String) {
    save();
  } else {
    switch (operator) {
      case "+":
        obj = Number(storage) + Number(obj);
        break;
      case "-":
        obj = Number(storage) - Number(obj);
        break;
      case "*":
        obj = Number(storage) * Number(obj);
        break;
      case "/":
        obj = Number(storage) / Number(obj);
    }
    storage = obj;
  }
}

function operation(oper) {
  const cal = oper;
  switch (cal) {
    case "+":
      operator = "+";
      break;
    case "-":
      operator = "-";
      break;
    case "*":
      operator = "*";
      break;
    case "/":
      operator = "/";
  }
  obj = "";
}

function enter() {
  document.querySelector(".screen").innerText = storage;
}

function clear() {
  obj = "";
  storage = "";
  document.querySelector(".screen").innerText = obj;
}
