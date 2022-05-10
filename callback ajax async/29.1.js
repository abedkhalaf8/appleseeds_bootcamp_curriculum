//? first fake req
//* return promise of → array[numbers]
const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

//? second fake req
//* param number
//* return promise of → string
const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

// getIDs()
//   .then((IDs) => {
//     //IDs = [532, 543, 753, 1, 5]
//     console.log(IDs);
//     return getRecipe(IDs[2]); // Promise
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log('It is an error!');
//   });

const printRecipe = async () => {
  try {
    const arrOfIDs = await getIDs(); // [532, 543, 753, 1, 5]
    console.log(arrOfIDs);
    console.log(await getRecipe(arrOfIDs[2]));
  } catch (error) {
    console.log(error);
  }
};
printRecipe();
