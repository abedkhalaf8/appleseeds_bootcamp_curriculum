const people = ["Greg", "Mary", "Devon", "James"];
for( i = 0; i<people.length; i++){
  console.log(people[i]);
}


people.shift();
people.pop();
people.push("Matt");
people.push("Abed");


for( i = 0; i<1; i++){
    console.log(people[i]);
  }

const people2 = people;
people2.slice(1,-1);
people.indexOf("Mary");
people.indexOf("Foo");
people.splice(1,1 ,"Elizabeth", 'Artie');
let withBob = people + ',Bob';
