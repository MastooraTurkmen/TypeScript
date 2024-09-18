"use strict";
// ---------
// Functions
// ---------
function addTwoNumbers(a, b) {
    return a + b;
}
const substractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(2, 2);
substractTwoNumbers(9, 3);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([3, 4, 2, 55, 10]);
// ---------------------
// return type inference
// ---------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("maro", "hello");
