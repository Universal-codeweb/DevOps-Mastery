"use strict";
const car = {
    name: "Infinity",
    year: 2026,
    hasLicense: true,
};
const employee = {
    name: "Yuzhou",
    age: 20,
    DOJ: new Date("2026-07-03"),
    Exp: 5,
};
const book = {
    name: "The power of your subconscious mind",
    year: 1963,
    author: "Joseph Murphy",
    publisher: "Penguine random house",
};
console.log(car);
console.log(employee);
console.log(book);
const m1 = {
    name: "Init",
    genre: "sci-fi",
    year: 2030,
    director: "Yuzhou",
};
console.log(m1);
function mname(m2) {
    console.log(`Soon watch "${m2.name}" movie`);
}
mname({
    name: "Not Today",
    genre: "Sci-fi",
    year: 2028,
    director: "Yuzhou",
});
class Cal {
    multiply(a, b) {
        return a + b;
    }
    divide(a, b) {
        return a / b;
    }
}
const c = new Cal();
console.log(c.multiply(20, 30));
console.log(c.divide(10, 50));
