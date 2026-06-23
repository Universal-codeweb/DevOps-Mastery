let mess = "Hello Universe";
function sayHello() {
    console.log(mess);
}

let namedFunction = function sum(n1, n2) {
    console.log(n1 + n2);
};

let anonymousFunction = function (p, str) {
    let res = p.test(str);
    let matches = str.match(p);
    console.log(res, matches);
};

let say = () => {
    console.log("Welcome to this universe filled with mysteries");
};

// IIFE
(function () {
    console.log("Level 5");
})();

function mul(n, callBack) {
    return callBack(n);
}

const cal = (n) => n * n;

// Constructor Function
function Universe(name, year) {
    this.name = name;
    this.year = year;
}

const enter = new Universe("Zverse", 130);
console.log(enter.name);

// Async Function
async function create() {
    let hell = true;
    return hell;
}

// Function Calls
sayHello();

namedFunction(5, 2);

anonymousFunction(/hello/i, "Hello Universe");

say();

console.log(mul(2, cal));

create().then(result => console.log(result));
function greeting(name, message = "Hello"){
    console. log(message, name)
}
greeting('Universe');
function contactUniversians(message, ...names){
  names.forEach(name => console.log(message, name));
}

contactUniversians('Hello', "Unknown", "Mystery", "Dark");
