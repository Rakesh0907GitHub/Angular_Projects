"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { name: "Rakesh", age: 24, id: 163, email: "Rakesh@gmail.com" };
let e = { name: 'Anjali', age: 25, id: 1, email: "", salary: 10000 };
let [user1, ...restUsers] = [
    { name: 'Anjali', age: 25, id: 10, email: "" },
    { name: 'Anjali1', age: 26, id: 11, email: "" },
    { name: 'Anjali2', age: 27, id: 12, email: "" },
    { name: 'Anjali3', age: 28, id: 13, email: "" },
];
console.log(user1);
console.log(restUsers);
