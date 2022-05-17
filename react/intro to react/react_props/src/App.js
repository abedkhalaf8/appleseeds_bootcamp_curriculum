import React from 'react';

//! React component VS JS function
//? React component it a function that return a JSX
//? And create a React element
// const element = React.createElement('h1', {}, 'just text');
// const domElement = document.createElement('div');
// console.dir(domElement);
// console.dir(element);

//! Props === Properties

function Dad2() {
  const name = 'Mordi';
  const name2 = 'Gil';
  return (
    <div>
      <h1>App 1</h1>
      <Son1 name={name} />
      <Son1 name={name2} />
      <Son2 name='Gil' />
    </div>
  );
}

function Son1(props) {
  // console.log(props);
  // console.log(props.name);
  return <div>{props.name}</div>;
}
class Son2 extends React.Component {
  render() {
    return <h2>{this.props.name}</h2>;
  }
}

// const Dad = () => {
//   return (
//     <div>
//       <h1>Im Abraham</h1>
//       <Son dadName='Abraham' name='Dani' grandName='Yosi' />
//       <Son dadName='Abraham' name='Bob' grandName='Yosi2' />
//       <Son dadName='Abraham' name='Moshe' grandName='Yosi3' />
//     </div>
//   );
// };

// const Son = ({ dadName, name, grandName }) => {
//   // const Son = (props) => {
//   return (
//     <div>
//       <h1>
//         Im {name} the son of {dadName}
//       </h1>
//       <Grand sonName={name} grandName={grandName} />
//       {/* <h1>Im the son of {props.dadName}</h1> */}
//     </div>
//   );
// };
// const Grand = ({ sonName, grandName }) => {
//   return (
//     <div>
//       <h1>
//         Im {grandName} the son of {sonName}
//       </h1>
//     </div>
//   );
// };

const Dad = () => {
  return (
    <div>
      <h1>Im Abraham</h1>
      {/* <Son dadName='Abraham' name='Dani' />
      <Son dadName='Abraham' name='Bob' /> */}
      <Son dadName='Abraham' name='Moshe'>
        <Grand sonName='Moshe' grandName='Tofik' />
        <Grand sonName='Moshe' grandName='Karam' />
        <Grand sonName='Moshe' grandName='Karam' />
      </Son>
    </div>
  );
};

const Son = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>
        Im {props.name} the son of {props.dadName}
      </h2>
      {props.children}
    </div>
  );
};
const Grand = ({ sonName, grandName }) => {
  return (
    <div>
      <h3>
        Im {grandName} the son of {sonName}
      </h3>
    </div>
  );
};

export default Dad;

//! Props are immutable
