"use strict";
//-----------------
// Generics classes
//-----------------
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
}
const users = new DataCollection([
    { name: "shaun", score: 222 },
    { name: "mario", score: 100 },
    { name: "peach", score: 140 },
]);
users.add({ name: "luigi", score: 40 });
console.log("load one - ", users.loadOne());
console.log("load all - ", users.loadAll());
