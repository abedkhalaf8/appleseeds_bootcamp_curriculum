 const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];


function g (food, food1) {
    let sameItem = [];
    for (let i = 0; i < food.length; i++){
        for (let j = 0; j < food1.length; j++){
           if (food[i] === food1[j]){
               sameItem.push(food[i]);
           }   
           }
        }
       if ( sameItem.length > 0) {
           return sameItem;
       } else {
           return false;
       }
    }
console.log(g(food, food1));