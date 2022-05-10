const makeAllCaps = (arrOfWords) => {
  return new Promise((resolve, reject) => {
    const resArr = [];
    arrOfWords.forEach((word) => {
      if (typeof word !== 'string') {
        reject('Have a non string word');
      }
      resArr.push(word.toUpperCase());
    });
    resolve(resArr);
  });
};
const sortWords = (arrOfWords) => {
  return new Promise((resolve, reject) => {
    arrOfWords.sort();
    resolve(arrOfWords);
  });
};

//! 3 methods on Promise
//? resolved → .then((resolveValue)=>{})
//? rejected → .catch((rejectValue)=>{})

// makeAllCaps(['wordasd5', 'ord2', 'a3'])
//   .then((arrOfCapital) => {
//     console.log(arrOfCapital);
//     return sortWords(arrOfCapital); //return Promise
//   })
//   .then((arrOfSortedCapital) => {
//     console.log(arrOfSortedCapital);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const printPromises = async (arr) => {
  try {
    const num = 1;
    num = 2;
    //   console.log(arr);
    const arrOfCapital = await makeAllCaps(arr); // async
    //   console.log(arrOfCapital); // ← ['WORDASD5', 'ORD2', '']
    const arrOfSortedCapital = await sortWords(arrOfCapital);
    console.log(arrOfSortedCapital);
  } catch (e) {
    console.log(e);
  }
};

printPromises(['wordasd5', 'ord2', '']);
// console.log(printPromises(['wordasd5', 'ord2', '']));
