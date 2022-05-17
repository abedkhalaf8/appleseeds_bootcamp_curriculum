

//  function calcAverage (arr){
// var sum ;
// for(var i = 0 ; i < arr.length; i ++){ sum += arr[ i ];
// }
// return sum ;
// }
// calcAverage ([ 85 , 90 , 92 ]);

//? 1. First find the line that contains the problem. Write it down.
//*  line 4
//*-------------------------------------------------------------------------------------------------
//? 2. Which debug method did you use to find the bug?
//*   debugger tools in console
//*-------------------------------------------------------------------------------------------------
//? 3. sum should be equal to 0;
//*-------------------------------------------------------------------------------------------------
//? 4. Fix the code and submit it all.
 function calcAverage (arr){
var sum = 0 ;
for(var i = 0 ; i < arr.length; i ++){ sum += arr[ i ];
}
return sum ;
}
calcAverage ([ 85 , 90 , 92 ]);

//*-------------------------------------------------------------------------------------------------