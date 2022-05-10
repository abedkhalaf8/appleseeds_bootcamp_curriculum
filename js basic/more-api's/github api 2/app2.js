//? all people https://swapi.dev/api/people/
// 1. Name
// 2. Height
// 3. Hair Color
//! 4. Planet they came from
//! 5. Planet population
const fetchPeople = async () => {
  try {
    const res = [];
    const { results } = await getFetchedData('https://swapi.dev/api/people/');

    // const homeArrOfStrUrl = results.map((e) => e.homeworld);
    // const homeArrOfPromises = homeArrOfStrUrl.map((e) => getFetchedData(e));
    // const homeWorlds = await Promise.all(homeArrOfPromises);
    const homeWorlds2 = await Promise.all(
      results.map((avatar) => getFetchedData(avatar.homeworld)) //array[promises]
    );

    return results.map((e, i) => {
      return {
        name: e.name,
        height: e.height,
        hair_color: e.hair_color,
        planet_name: homeWorlds2[i].name,
        planet_population: homeWorlds2[i].population,
      };
    });
  } catch (e) {}

  // for (let i = 0; i < results.length; i++) {
  //   const palnetData = getFetchedData(results[i].homeworld);
  //   homeWorldsUrl.push(results[i].homeworld);
  //   res.push({
  //     name: results[i].name,
  //     height: results[i].height,
  //     hair_color: results[i].hair_color,
  //     planet_name: palnetData.name,
  //     planet_population: palnetData.population,
  //   });
  // }

  // console.log(res);
  // console.log(results);
};
const getFetchedData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
fetchPeople()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
