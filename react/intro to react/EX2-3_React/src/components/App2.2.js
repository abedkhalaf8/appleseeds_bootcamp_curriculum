function App() {
  const data = ['hello', 'world'];

  const number1 = 5;
  const number2 = 6;

  const string = 'I love React!';

  const toUpper = (arr) => {
    return arr
      .map((word) => {
        const newWord = word.charAt(0).toUpperCase() + word.slice(1);
        return newWord;
      })
      .join(' ');
  };
  return (
    <div>
      <h2>{toUpper(data)}</h2>
      <h2>
        the output should be: {number1} + {number2} = {number1 + number2}
      </h2>
      <h2>The string's length is {string.length}</h2>
    </div>
  );
}

export default App;
