const isGrater = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('it is resolved');
    } else {
      reject('it is rejected');
    }
  });
};

//! 3 methods on Promise
//? resolved → .then((resolveValue)=>{})
//? rejected → .catch((rejectValue)=>{})
//? finally → .finally(()=>{})

// console.log(isGrater(5));
isGrater(1)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('do something at the end');
  });
