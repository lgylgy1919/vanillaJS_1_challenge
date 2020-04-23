const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
};
console.log(nicoInfo.favfood);

function sayHello(name, age) {
  console.log("Hello! ", name, " you are", age, "years of age.");
  console.log(`Hello ${name}. You are ${age} years old.`);
  return `Hello ${name}. You are ${age} years old.`;
}

sayHello("Nicolas", 15);
console.log("Hi!");

const greeting = sayHello("Nicolas", 15);
console.log(greeting);

const calculatr = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 4);
console.log(plus);
