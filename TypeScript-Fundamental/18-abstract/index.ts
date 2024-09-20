//------------
// classes 101
//------------

type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }
  abstract format(): string;
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }

  format(): string {
    let formatted = this.details + "\n";

    // base
    formatted += `Pizza on a ${this.base} base`;

    // topping
    if (this.toppings.length < 1) {
      formatted += `with no topping`;
    }
    if (this.toppings.length > 0) {
      formatted += `with ${this.toppings.join(", ")}`;
    }
    return formatted;
  }
}

const pizza = new Pizza("mario", 33);

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

pizza.addTopping("mushrooms");
pizza.addTopping("peppers");

printFormatted(pizza);
