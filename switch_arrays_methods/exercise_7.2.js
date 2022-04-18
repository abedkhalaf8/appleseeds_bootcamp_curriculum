const string = "The more you know, the more you know that you don't know";
let newstr = string.split("");
let countIndex=[];
for (let i = 0; i < newstr.length; i++) {
       if ( newstr[i] === 'y'){
           countIndex.push(i);
       }
}
console.log(Math.max(...countIndex));