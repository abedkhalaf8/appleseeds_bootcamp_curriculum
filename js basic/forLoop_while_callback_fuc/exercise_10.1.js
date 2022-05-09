function isString (string, callback) { 
   if( typeof string === 'string' ) {
         callback(string);
    }
}
function logString (string) {
  console.log(string);
}
isString("hello", logString);


function firstWordUpperCase(str, callback) {
   let arr = str.split('');
   let letter1 = [];
   letter1.push(arr[0].toUpperCase())
   arr.shift();
   arr.unshift(letter1[0]);
   callback(arr);
}

function dashed(arr) {
   arr.unshift("-");
   arr.push('-');
   let z = arr.join('');
   console.log(z);

}
firstWordUpperCase("abed", dashed);



function myfunc (str, callback){
    let g = str + " Word";
    callback(g);
}

function year(str) {
    let b = str + " 2022";
    console.log(b);
}
myfunc("hello", year);