"use strict";
// ------------------
// reusable interface
// ------------------
const something = { quantity: 39 };
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: "mango",
    quantity: 50,
};
const vehicle = {
    type: "car",
    quantity: 6,
};
const person = {
    name: "mario",
    age: 43,
};
printQuantity(fruit);
printQuantity(vehicle);
printQuantity({ quantity: 40 });
