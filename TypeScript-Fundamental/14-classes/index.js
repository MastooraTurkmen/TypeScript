"use strict";
//------------
// classes 101
//------------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza("mario", 33);
pizza.selectBase("garlic");
pizza.addTopping("mushrooms");
pizza.addTopping("olives");
console.log(pizza);
