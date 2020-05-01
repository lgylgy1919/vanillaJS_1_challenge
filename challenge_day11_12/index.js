let obj = "";
let storage;
let operator;
let r;

function save() {
  storage = Number(obj);
}
function inputNum(number) {
  const num = number;
  obj += num;
  document.querySelector(".screen").innerText = obj;
  if (!operator) {
    save();
  } else {
    switch (operator) {
      case "+":
        if (r !== 1) {
          storage = Number(storage) + Number(obj) - r;
        } else {
          storage = Number(storage) + Number(obj);
        }
        break;
      case "-":
        if (r !== 1) {
          storage = Number(storage) - Number(obj) + r;
        } else {
          storage = Number(storage) - Number(obj);
        }
        break;
      case "*":
        if (r !== 1) {
          storage = (Number(storage) * Number(obj)) / r;
        } else {
          storage = Number(storage) * Number(obj);
        }
        break;
      case "/":
        if (r !== 1) {
          storage = (Number(storage) / Number(obj)) * r;
        } else {
          storage = Number(storage) / Number(obj);
        }
    }
    r = Number(obj);
  }
}

function operation(oper) {
  document.querySelector(".screen").innerText = storage;
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
  r = 1;
  obj = "";
}

function enter() {
  obj = storage;
  document.querySelector(".screen").innerText = storage;
}

function del() {
  obj = "";
  storage = 0;
  operator = undefined;
  document.querySelector(".screen").innerText = "0";
}
