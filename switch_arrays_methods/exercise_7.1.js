function g(arr){
    let arr2 = arr;
    for (let i = 0; i <arr.length;i++){
        for (let j = i + 1 ; j <arr2.length; j++){
            if ( arr[i] === arr2[j]){
                arr.splice(j, 1);
            }
        }
    }
}
let arr = [3,4,4,3,6,3];
g(arr);