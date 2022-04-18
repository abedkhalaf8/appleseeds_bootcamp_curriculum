
const welcome = function () {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
const power = function (a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const add = function (a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

function hello(){
 "Hello!";
}

function squareRoot(a){
    Math.sqrt(a);
}

function randomNumbers(a, b){
 Math.random() * (a - b) + b;
}



