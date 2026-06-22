//this keyword
const universe={
    name: "Zverse",
    activate(){
        return `Started evolving, ${this.name}`;
    }
};
console.log(universe.activate());
//regex
let p = /hello/;
let res = p.test("Hello, Universe!");
console.log(res);
//with flag i
let pt =/universe/i;
let i = "Universe is a mystery";
console.log(pt.test(i));
