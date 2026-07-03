const car:{
    name: String;
    year: number;
    hasLicense:boolean;
} = {
    name : "Infinity",
    year: 2026,
    hasLicense: true,
}
const employee:{
    name: string;
    age: number;
    DOJ: Date;
    Exp: number;
} = {
    name: "Yuzhou",
    age: 20,
    DOJ: new Date("2026-07-03"),
    Exp:5,
}
const book:{
    name: string;
    year: number;
    author: string;
    publisher: string;
} ={
    name: "The power of your subconscious mind",
    year: 1963,
    author: "Joseph Murphy",
    publisher: "Penguine random house",
}
console.log(car);
console.log(employee);
console.log(book);
interface Movie{
    name: string;
    genre: string;
    year: number;
    director: string;
}
const m1:Movie={
    name:"Init",
    genre: "sci-fi",
    year:2030,
    director: "Yuzhou",
}
console.log(m1);
function mname(m2:Movie):void{
    console.log(`Soon watch "${m2.name}" movie`);
}
mname({
    name:"Not Today",
    genre:"Sci-fi",
    year:2028,
    director:"Yuzhou",
})
interface Calculator{
    multiply(a:number, b:number):number;
    divide(a:number, b:number):number;
}
class Cal implements Calculator{
    multiply(a:number, b:number):number{
        return a+b;
    }
    divide(a:number, b:number):number{
        return a/b;
    }
}
const c = new Cal();
console.log(c.multiply(20,30));
console.log(c.divide(10,50));
