let populations = [50e6, 40e5, 20e2, 30e5]

function populationPercentages(populations) {
  let percentages = [];
  let i = 0;
   while ( i < populations.length ){
     percentages.push(populations[i] / 7e9 * 100);
     i++;
  }
  return percentages;
}
console.log(populationPercentages(populations));