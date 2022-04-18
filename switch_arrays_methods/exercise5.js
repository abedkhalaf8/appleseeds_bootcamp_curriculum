const arr = [1,7,3,0,-5,7,3,9]; 
for (let i=0; i<arr.length; i++) {
   console.log(arr[i]);
}


function arrayLength(b) {
    let length = 0;
    while(b[length]!==undefined){
    length++;
  }
  return length;
}


function arraySum(d){
    let sum = 0;
    for (let j=0; j<d.length; j++) {
    sum = sum + d[j];
}
  return sum;
}


function arrayMulti(g){
    let multi = 0;
    for (let f=0; f<g.length; f++) {
    multi = multi * g[f];
}
  return multi;
}
 