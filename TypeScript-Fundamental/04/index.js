"use strict";
// --------
// any type
// --------
let age;
let title;
age = 20;
age = false;
title = 23;
title = { hello: "world" };
// -------------------
// any type in arrays
// -------------------
let things = ["hello", true, 30, null];
things.push({ id: 22 });
// ---------------
// functions & any
// ---------------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(2);
// useful when migrating from js to ts
// because using any won't cause errors initially
