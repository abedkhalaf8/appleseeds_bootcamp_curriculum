function stringsLength(arr) {
    let newarr = [];
    for (let i = 0; i<arr.length; i++){
          newarr.push(arr[i].length);
    }
    return newarr;
  }
  arr2= ["boo", "doooo", "hoo","ro"];
  console.log(stringsLength(arr2));