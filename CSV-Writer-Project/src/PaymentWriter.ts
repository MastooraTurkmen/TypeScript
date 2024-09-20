import { CSVWriter } from "./index";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  {
    id: 1,
    amount: 50,
    to: "yoshi",
    notes: "for design work",
  },
  {
    id: 2,
    amount: 100,
    to: "mario",
    notes: "for DEV work",
  },
  {
    id: 3,
    amount: 30,
    to: "yoshi",
    notes: "for cleaning work",
  },
]);

paymentWriter.save("./data/payments.csv");
