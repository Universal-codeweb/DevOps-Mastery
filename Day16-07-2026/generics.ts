function speakToUniverse<T>(value:T):T{
    return value;
}
console.log(speakToUniverse("I want to explore the whole universe and need to get the reason behind everything"));
function notSpeakToUniverse<T>(value:T):void{
    console.log(value);
}
notSpeakToUniverse(0);
let displayResult = <parameter> 
    (data_item : parameter[]) : parameter[] => {
    return new Array <parameter>().concat(data_item);
  }

let numbersArray = displayResult<number>
    ([50 , 60 , 80 , 90]);
    
let stringArray = displayResult<string>
    (["Universe","Unknown"]);

console.log(numbersArray);
console.log(stringArray);

numbersArray.push(100);
stringArray.push("Apple");

console.log(numbersArray);
console.log(stringArray);