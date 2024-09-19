"use strict";
//---------------------
// function signatures
//---------------------
function addTwoNumbers(a, b) {
    return a + b;
}
function multiplyTwoNumbers(first, second) {
    return first * second;
}
function squareNumber(num) {
    return num * num;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumber);
const shapeOne = {
    name: "square",
    calcArea(l) {
        return l * l;
    },
};
const shapeTwo = {
    name: "circle",
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
