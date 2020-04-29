const toDoForm = document.querySelector(".todoForm");
const toDo = toDoForm.querySelector("input");
const pdList = document.querySelector(".pdList");
const fnList = document.querySelector(".fnList");
let LSPList = [];
let LSFList = [];

function backToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const content = li.firstElementChild.innerText;
  paintPending(content);
  fnList.removeChild(li);
  const cleanFinisheds = LSFList.filter(function (toPen) {
    return toPen.id !== li.id;
  });
  LSFList = cleanFinisheds;
  saveOnF();
}

function completePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const content = li.firstElementChild.innerText;
  paintFinished(content);
  pdList.removeChild(li);
  const cleanPendings = LSPList.filter(function (toPen) {
    return toPen.id !== li.id;
  });
  LSPList = cleanPendings;
  saveOnP();
}
function saveOnP() {
  localStorage.setItem("pendingList", JSON.stringify(LSPList));
}
function saveOnF() {
  localStorage.setItem("finishedList", JSON.stringify(LSFList));
}

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pdList.removeChild(li);
  const cleanPendings = LSPList.filter(function (toPen) {
    return toPen.id !== li.id;
  });
  LSPList = cleanPendings;
  saveOnP();
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  fnList.removeChild(li);
  const cleanFinisheds = LSFList.filter(function (toFin) {
    return toFin.id !== li.id;
  });
  LSFList = cleanFinisheds;
  saveOnF();
}

function paintPending(text) {
  const li = document.createElement("li");
  const comBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = "P" + (LSPList.length + 1);

  delBtn.innerText = " ❌";
  delBtn.addEventListener("click", deletePending);
  comBtn.innerText = " ✅";
  comBtn.addEventListener("click", completePending);
  span.innerText = text;
  li.append(span);
  li.append(delBtn);
  li.append(comBtn);
  li.id = newId;
  pdList.append(li);
  const pdObj = {
    text: text,
    id: newId,
  };
  LSPList.push(pdObj);
  saveOnP();
}

function paintFinished(text) {
  const li = document.createElement("li");
  const backBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = "F" + (LSPList.length + 1);

  delBtn.innerText = " ❌";
  delBtn.addEventListener("click", deleteFinished);
  backBtn.innerText = " ◀️";
  backBtn.addEventListener("click", backToDo);
  span.innerText = text;
  li.append(span);
  li.append(delBtn);
  li.append(backBtn);
  li.id = newId;
  fnList.append(li);
  const fnObj = {
    text: text,
    id: newId,
  };
  LSFList.push(fnObj);
  saveOnF();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDo.value;
  paintPending(currentValue);
  toDo.value = "";
}

function loadPendingList() {
  const pendings = localStorage.getItem("pendingList");
  if (pendings !== null) {
    const parsedPendings = JSON.parse(pendings);
    parsedPendings.forEach(function (pend) {
      paintPending(pend.text);
    });
  }
}
function loadFinishedList() {
  const finisheds = localStorage.getItem("finishedList");
  if (finisheds !== null) {
    const parsedFinisheds = JSON.parse(finisheds);
    parsedFinisheds.forEach(function (finish) {
      paintFinished(finish.text);
    });
  }
}

function init() {
  loadPendingList();
  loadFinishedList();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
