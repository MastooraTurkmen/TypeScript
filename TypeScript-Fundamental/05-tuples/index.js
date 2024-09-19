"use strict";
// ------
// tuples
// ------
let person = ["maro", 30, false];
// ---------------
// tuples examples
// ---------------
let hsla;
hsla = [300, "20%", "4.4", 23];
let xy;
xy = [22.2, 3.3];
function useCoords() {
    // get coords
    const lat = 23;
    const lang = 32;
    return [lat, lang];
}
const [lat, lang] = useCoords();
// ------------
// named tuples
// ------------
let user;
user = ["mastoora", 23];
console.log(user[0]);
