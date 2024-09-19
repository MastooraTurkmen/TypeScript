//------------
// classes 101
//------------

type Base = "classic" | "thick" | "thin" | "garlic";

class Pizza {
  constructor(private title: string, private price: number) {}

  base: Base = "classic";
  toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizzaOne: Pizza = new Pizza("mario", 33);
const pizzaTwo = new Pizza("luigi special", 10);

function addMushroomsToPizza(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
}

addMushroomsToPizza([pizzaOne, pizzaTwo]);

console.log(pizzaOne, pizzaTwo);
