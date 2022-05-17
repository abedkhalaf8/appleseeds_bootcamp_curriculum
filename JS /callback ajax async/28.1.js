const button = document.querySelector('button');
const questionH3 = document.querySelector('.q');
const punchH3 = document.querySelector('.p');

//? fetch → window.fetch (Web API) → return Response obj

//! 28.1
// const getJoke = () => {
//   const fetchingData = fetch(
//     'https://backend-omega-seven.vercel.app/api/getjoke'
//   )
//     .then((res) => {
//       return res.json(); // Promise
//     })
//     .then((data) => {
//       question.textContent = data[0].question;
//       punch.textContent = data[0].punchline;
//       console.log(data[0].question);
//       console.log(data[0].punchline);
//     });
// };

//! 29.2
const getJoke = async () => {
  try {
    const response = await fetch(
      'https://backend-omega-seven.vercel.app/api/getjoke'
    );
    const data = await response.json();
    const [{ question, punchline }] = data;
    // const q1 = data[0].question;
    // const p1 = data[0].punchline;
    questionH3.textContent = question;
    punchH3.textContent = punchline;
  } catch (e) {
    console.log(e);
  }
  //   console.log(data[0].question);
  //   console.log(data[0].punchline);
};
button.addEventListener('click', getJoke);
