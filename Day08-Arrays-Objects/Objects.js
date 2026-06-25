let detail = {
    name : 'ne3',
    type : 'nebulae',
    age : 1500,
    say: function(){
        alert("Hello,",this.name);
    }
}
console.log(detail);
//Adding properties in object 1.directly to the object
detail = {
    name : 'ne3',
    type : 'nebulae',
    age : 1500,
    say: function(){
        alert("Hello,",this.name);
    },
    isAvailable: true,
}
console.log(detail);
//2. using dot notation
detail.year=2050;
console.log(detail);
detail.age=1600;
console.log(detail);
delete detail.isAvailable;
console.log(detail);
let planets = {
    name: 'jupiter',
    'moon with water' : 'Europa',
}
console.log(planets);
console.log(planets[ 'moon with water']);
let galaxy = 'andro';
let unknown={
    name :['lu', 'shi'],
    isfound:[false, false],
    [galaxy]:'Lu',
}
console.log(unknown);
//Method shorthand
unknown={
    name :['lu', 'shi'],
    isfound:[false, false],
    [galaxy]:'Lu',
    never(){
        return "nevermore";
    }
}
console.log(unknown);
//Spread operator
let unknown2 ={...unknown};
console.log("unknow2",unknown2);
//object destructuring
let universe = {name:'trans', year:2026}
const{name, year}=universe;
console.log(name);
console.log(year);