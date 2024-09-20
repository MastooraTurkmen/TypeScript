"use strict";
//-------------------
// Generics interface
//-------------------
const collectionOne = {
    data: ["mario", "luigi", "peach"],
    name: "mario characters",
};
const collectionTwo = {
    data: [10, 15, 27, 9, 3, 34],
    name: "winning lottery numbers",
};
function randomCollectItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectItem(collectionOne);
const resultTwo = randomCollectItem(collectionTwo);
console.log(resultOne, resultTwo);
