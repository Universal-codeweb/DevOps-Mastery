"use strict";
const r1 = {
    noppl: 4,
    rname: "Gryfindore",
    isClean: true,
};
const r2 = {
    noppl: 5,
    rname: "Hufflepuff"
};
console.log(r1, r2);
//in class
class Car {
    brand;
    model;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
const c1 = new Car('BMW');
const c2 = new Car('BMW', 'M8');
console.log(c1, c2);
const s1 = {
    aname: "Nevermore",
    genre: "fantasy",
    director: "yuzhou",
    year: 2028,
};
const s2 = {
    aname: "Not into",
    genre: "sci-fi",
    director: "yuzhou",
};
console.log(s1, s2);
let firstUser = { firstName: "Yu" };
let secondUser = { firstName: "Yu", lastName: "Zhou" };
console.log(firstUser);
console.log(secondUser);
