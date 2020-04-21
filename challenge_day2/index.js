let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
//consoloe출력값 :(216 4)

const c = 221;
const d = c - 5;
// c = 4; 오류 발생

var e = 221;
var f = e - 5;
e = 4;
//llet처럼 변경 가능하지만 지금은 거의 사용x,

//string
const name = "Nicolas";
console.log(name);
//Nicolas 출력

//boolean
const who = false;
const how = true;

//number
const number = 666;

//float
const float = 44.1;

//Array
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
//string, boolean,number, variable,
const something = "something";
const daysOfWeek = [
  "Mon",
  "The",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  54,
  true,
  something,
];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
//Wed 출력

//object
const object = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["along the god", "harrypotter"],
  favFood: [
    { name: "kimchi", fatty: false },
    { name: "cheeseburder", fatty: true },
  ],
};
console.log(object.gender);
//Male이 출력된다.
object.gender = "Female";
console.log(object.gender);
//Female이 출력된다.
console.log(object);
console.log(object.favFood[0].fatty);
