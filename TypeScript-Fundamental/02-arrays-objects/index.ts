// ------
// arrays
// ------

let names: string[] = ["Mario", "Luigi", "Peach"];
let ages: number[] = [23, 49, 22];

names.push("bowsers");
ages.push(34);

// ---------------------------
// type inference with arrays
// ---------------------------
let fruits = ["applies", "pears", "bananas", "mangos"];

fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"];

// ---------------
// object literals
// ---------------

let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 22,
  id: 2,
};

user.firstName = "peach";

// -----------------------------------
// type inference with object literals
// -----------------------------------

let person = {
  name: "luigi",
  score: 35,
};

person.name = "bowser";
person.score = 20;

const score = person.score;
