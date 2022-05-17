
//  function getSum(arr1, arr2){
// const sum = 0;
//      for (let i = 0; i < arr1.length; i++){
//          sum += arr1[i];
// }
//      for (let i = 0; i < arr2.length; i++){
//          sum += arr2[i];
// }
// } getSum([1,2,3],[5,66,23]);

//? 1. First find the line that contains the problem. Write it down.
//* in line 3 + line 10
//*-------------------------------------------------------------------------------------------------
//? 2. Which debug method did you use to find the bug?
//* 
//*-------------------------------------------------------------------------------------------------
//? 3. Explain the bug in your own words.
//*  we cant use const as changable variable , as it cant be changed. so i used let.
//* in the getSum at line 10 the caller had a missing a coma
//*-------------------------------------------------------------------------------------------------
//? 4. Fix the code and submit it all.

    function getSum(arr1, arr2) {
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
}
}
getSum([1, 2, 3],[5, 66, 23]);
//*-------------------------------------------------------------------------------------------------

