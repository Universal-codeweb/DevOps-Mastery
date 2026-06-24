const mixedTypedArray =[ 888, false, 'Universe', {},1.3];
const n = ['Yuzhou','Uni','unknown'];
const emojis =['😎','😁','😂','😑','😵‍💫'];
const emojis2 = new Array('😎','😁','😂','😑','😵‍💫');
console.log(mixedTypedArray,n, emojis, emojis2);
const element = emojis[0];
console.log(element);
console.log(emojis[3]);
const len = n.length;
n.push('Universe');
unshift.emojis('⛳');
emojis.pop();
n.shift();
const ecopy = emojis.slice();
console.log(emojis===ecopy);
console.log(Array.isArray(['😎','😁','😂','😑','😵‍💫']));
console.log(Array.isArray('Universe'));
console.log(Array.isArray([]));

let[name, age] = ['Yuzhou','20'];
console.log(name, age);
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
console.log(fruits[4]);
let first = 'Hi';
let second = 'Hello';
[first, second] = [second, first];
console.log(first, second);
//Merge arrays
const e1e2 =[...emojis, ...emojis2];
console.log(e1e2);
//methods
//concat
const n1 =[1,2,3];
const n2 =[4,5,6];
const merged = n1.concat(second);
console.log(merged);
const n3 =[7,8,9];
const merged2 = n1.concat(n2,n3);
//join
const join = emojis.join();
console.log(join);
const join2 = emojis.join('---');
//fill
const num =[1,4,5,9,0];
num.fill(-1);
console.log(num);
//includes
console.log(fruits.includes('🍍'));
//indexof
console.log(fruits.indexOf('🍍'));
