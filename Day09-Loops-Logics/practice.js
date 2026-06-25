let characters=['Lu','Shiyi','Xu','Bai','lusi'];
//for
for(let i=0; i<characters.length;i++){
    console.log(characters[i]);
}
unknown={
    name :['lu', 'shi'],
    isfound:[false, false],
    never(){
        return "nevermore";
    }
}
//for in
for(let i in unknown){
    console.log(unknown[i]);
}
const house =['slytheriin', 'Gryfindore','Hufflepuff'];
//for of
for(let i of house){
    console.log("Houses :",i);
}
const m = new Map();
m.set("Toko","Cosmic writer");
m.set("Yuzhou","Phylosophical writer");
for (let w of m){
    console.log("Writers:",w);
}
//for each
house.forEach(function(h){
    console.log(h);
})
//while
let d =0;
let a = 123;
let n =0;
while(a>0){
    d = a%10;
    n = (n*10)+d;
    a=Math.floor(a/10);
}
console.log(n);
//do while
let i =10;
do{
    console.log("Universe",i);
    i--;
}while(i>0);
//Conditional statements
for(let i =1; i<20;i++){
    if(a%2==0){
        console.log(i)
    }
    else{
        console.log("unavailable");
    }
}
let income = 300000;
if(income<=250000){
    console.log("No tax");
}else if(income>250000 && income<=500000){
    console.log("5%");
}
else if(income>500000 && income<=750000){
    console.log("10%");
}
else if(income>750000 && income<=100000){
    console.log("15%");
}else{
    console.log("20%");
}
//switch
let num = 5;
switch(num){
    case 1:
        console.log("Calling 9568xxxxx0");
        break;
    case 2:
        console.log("Calling 9568xxxxx0");
        break;
    case 3:
        console.log("Calling 8528xxxxx0");
        break;
    case 4:
        console.log("Calling 7468xxxxx0");
        break;
    case 5:
        console.log("Calling 6389xxxxx0");
        break;
    default:
        console.log("Number not registered with phone number");
}