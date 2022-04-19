//! we want to sum all numbers in even
//! cells in arrays of size 10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 2 + 4 + 6 + 8 + 10 = 30

//?  function getSumOfEven(arr){
//? return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
//? } getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

//? 1. First find the line that contains the problem. Write it down.
//*  line 6 
//*-------------------------------------------------------------------------------------------------
//? 2. Which debug method did you use to find the bug?
//*   debugger tools in console
//*-------------------------------------------------------------------------------------------------
//? 3. Explain the bug in your own words.
//*  the array start with index 0 , so its 0-9 not 1-10
//*-------------------------------------------------------------------------------------------------
//? 4. Fix the code and submit it all.
function getSumOfEven(arr){
console.log(arr[1] + arr[3] + arr[5] + arr[7] + arr[9]);
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//*-------------------------------------------------------------------------------------------------