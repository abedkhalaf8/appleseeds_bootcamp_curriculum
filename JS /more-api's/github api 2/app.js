const body = document.querySelector('body');
const container = document.querySelector('.container');

const getArrOfPeople = async () => {
  try {
    const res = [];
    const { results } = await getFetchedData('https://swapi.dev/api/people/');
    const homeWorlds = await Promise.all(
      results.map((avatar) => getFetchedData(avatar.homeworld))
    );
    return structurePeopleObj(results, homeWorlds);
  } catch (e) {
    console.log(e);
  }
};
const structurePeopleObj = (peopleArr, homeWorldsArr) => {
  return peopleArr.map((e, i) => {
    return {
      name: e.name,
      height: e.height,
      hair_color: e.hair_color,
      planet: {
        name: homeWorldsArr[i].name,
        population: homeWorldsArr[i].population,
      },
    };
  });
};
const getFetchedData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const addTitleRow = (title) => {
  const titleBox = document.createElement('div');
  titleBox.classList.add('row');
  titleBox.textContent = title;
  container.appendChild(titleBox);
};
const addRow = (arrOfData) => {
  const row = document.createElement('div');
  row.classList.add('row');
  arrOfData.forEach((e) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = e;
    row.appendChild(cell);
  });
  container.appendChild(row);
};
const drawTable = (arrOfData) => {
  addTitleRow('Star Wars');
  addRow(['name', 'hair', 'height', 'planet name', 'population']);
  arrOfData.forEach((e) => {
    addRow([
      e.name,
      e.hair_color,
      e.height,
      e.planet.name,
      e.planet.population,
    ]);
  });
};

const paintPage = async () => {
  drawTable(await getArrOfPeople());
};
paintPage();
