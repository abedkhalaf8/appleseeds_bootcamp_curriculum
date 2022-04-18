const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

// split the words of the strings array to letters
function splitarray(array) { 
    const array2 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) { // delete the space between letters
            if (array[i][j] !== " ") {
                array2.push(array[i][j]); // push the letters into new arr before the count;
            }
        }
    }
    return array2;
}

let newarr = splitarray(array);

function countLetters(newarr) {    
    let newarr2 = newarr; 
    let obj = {}; // empty object
    let counter = 0;
    // take the first letter of arr and scan it again in the arr with the second 'for'
    for (let a = 0; a < newarr2.length; a++) { 

        // check letter
        for (let b = 0; b < newarr2.length; b++){
             if (newarr2[a].toLowerCase() === newarr2[b].toLowerCase()) { // add toLowerCase() so it can count Upper and lower letters
                    counter++; // count similar letter 
             }
        }
   
    obj[newarr2[a]] = counter; // push the letter and how much it counted into the empty obj;
    counter = 0; // make counter zero again so it doesn't affect the next scan.
    }
    return obj;
}
console.log(countLetters(newarr));
