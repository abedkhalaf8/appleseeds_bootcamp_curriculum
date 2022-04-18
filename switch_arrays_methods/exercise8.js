let populations = [50e6, 40e5, 20e2, 30e5]

function populationPercentages(populations) {
  let percentages = [];
  for(let i=0; i<populations.length; i++){
     percentages.push(populations[i] / 7e9 * 100);
  }
  return percentages;
}
populationPercentages(populations);







