"use strict";
function speakToUniverse(value) {
    return value;
}
console.log(speakToUniverse("I want to explore the whole universe and need to get the reason behind everything"));
function notSpeakToUniverse(value) {
    console.log(value);
}
notSpeakToUniverse(0);
let displayResult = (data_item) => {
    return new Array().concat(data_item);
};
let numbersArray = displayResult([50, 60, 80, 90]);
let stringArray = displayResult(["Universe", "Unknown"]);
console.log(numbersArray);
console.log(stringArray);
numbersArray.push(100);
stringArray.push("Apple");
console.log(numbersArray);
console.log(stringArray);
