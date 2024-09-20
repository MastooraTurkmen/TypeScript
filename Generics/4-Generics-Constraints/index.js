"use strict";
//-----------------
// Generics Constraints
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
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { name: "shaun", score: 222, id: 3 },
    { name: "mario", score: 100, id: 1 },
    { name: "peach", score: 140, id: 2 },
]);
users.add({ name: "luigi", score: 40, id: 4 });
users.deleteOne(3);
console.log("load one - ", users.loadOne());
console.log("load all - ", users.loadAll());
