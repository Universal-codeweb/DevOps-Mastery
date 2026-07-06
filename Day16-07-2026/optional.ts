interface room{
    noppl: number;
    rname: string;
    isClean?:boolean;
}
const r1:room ={
    noppl:4,
    rname:"Gryfindore",
    isClean:true,
}
const r2:room={
    noppl:5,
    rname:"Hufflepuff"
}
console.log(r1, r2);
//in class
class Car{
    brand:string;
    model?:string;
    constructor(brand:string, model?:string){
        this.brand=brand;
        this.model=model;
    }
}
const c1 = new Car('BMW');
const c2= new Car('BMW','M8');
console.log(c1,c2);
//in type
type series ={
    aname: string;
    genre: string;
    director: string;
    year?: number;
}
const s1:series={
    aname:"Nevermore",
    genre:"fantasy",
    director:"yuzhou",
    year: 2028,
}
const s2:series={
    aname:"Not into",
    genre:"sci-fi",
    director:"yuzhou",
}
console.log(s1,s2);
type User = {
    firstName: string,
    lastName: string
}
let firstUser: Partial<User> =
    { firstName: "Yu" }
let secondUser: User =
    { firstName: "Yu", lastName: "Zhou" }
console.log(firstUser);
console.log(secondUser);