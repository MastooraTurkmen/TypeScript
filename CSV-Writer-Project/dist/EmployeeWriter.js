"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter([
    "id",
    "name",
    "role",
    "salary",
]);
employeeWriter.addRows([
    {
        id: 1,
        name: "shaun",
        salary: 5000,
        role: "web developer",
    },
    {
        id: 2,
        name: "jay",
        salary: 5000,
        role: "digital manager",
    },
    {
        id: 3,
        name: "toad",
        salary: 5000,
        role: "director",
    },
]);
employeeWriter.save("data/employees.csv");
