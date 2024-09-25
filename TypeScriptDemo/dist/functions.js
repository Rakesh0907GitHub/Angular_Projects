"use strict";
function add(n1, n2, n3) {
    return n3 ? n1 + n2 + n3 : n1 + n2;
}
console.log(add(10, 13));
const sub = (n1, n2) => n1 - n2;
console.log(sub(45, 46));
function geti(items) {
    return new Array().concat(items);
}
let concatResult = geti([1, 2, 3, 4, 5, 6]);
let concatString = geti(["Rakesh", "Boda"]);
console.log(concatString);
