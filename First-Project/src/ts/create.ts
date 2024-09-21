import { Pizza, PizzaProps } from "./models/Pizza";

// const titleInput = document.querySelector(
//   'input[name="title"]'
// ) as HTMLInputElement;

// const descriptionInput = document.querySelector(
//   "textarea"
// ) as HTMLTextAreaElement;

const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProps = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    toppings: data.getAll("toppings") as string[],
    price: parseInt(data.get("price") as string),
  };

  const res = await Pizza.save(newPizza);

  if (!res.ok) {
    console.log("not able to save the pizza");
  }
  if (res.ok) {
    window.location.href = "/";
  }
});
