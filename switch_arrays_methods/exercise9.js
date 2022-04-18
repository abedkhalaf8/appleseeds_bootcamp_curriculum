let arr = [];
let g = {fruit:"apple"};
for(let i=0; i<=100; i++){
  arr.push("");
}
arr.fill(g);
console.log(arr);


let obj = {type:'car', name:"khobshet"};
let arr = Object.values(obj);


let arr=['hi','bye'];
let x = {};
for (let i = 0; i < arr.length; ++i)
x[i] = arr[i];

let arr = ['hi'];
console.log(Array.isArray(arr));