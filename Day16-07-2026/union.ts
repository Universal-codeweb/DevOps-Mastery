let age : number| string;
age ="Twenty";
console.log(age);
age=20;
console.log(age);
type universe={
    name: string;
    age: string | number;
}
type omniverse={
    uname: string;
    age: string | number;
}
let yuzhou: universe | omniverse ={name:"yuzhou", age:"13 million light years old"}
console.log(yuzhou);
yuzhou={
    uname:"cos",
    age:"20 light years"
}
console.log(yuzhou);
function tellUniverse(data:string|boolean):void{
    console.log(`Message "${data}" shared to the universe`);
}
tellUniverse("I need to explore the whole universe");
let value: (string | number)[] = [0,1,2,3,4,5,6,7];
console.log(values);
value = ["I", "am", "there", "for","the","Whole Universe"];
console.log(values);
