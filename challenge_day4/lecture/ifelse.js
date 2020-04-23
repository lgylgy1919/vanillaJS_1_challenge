if (10 === 5) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("yeah");
} else {
  console.log("no!");
}

if (10 > 5 && "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("No");
}

if (10 > 5 || "nicolas" === "necolas") {
  console.log("yes");
} else {
  console.log("No");
}

const age = prompt("How old are you?");

if (age >= 18 && age <= 21) {
  console.log("You can drink but you sholud not");
} else if (age < 18) {
  console.log("You can't");
} else {
  console.log("You can drink!");
}
