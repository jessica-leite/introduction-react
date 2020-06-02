import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function sum(a, b) {
  return a + b;
}

function firstJSX() {
  return (
    <div className="test">
      Welcome =)
      <p>The result of sum is: {sum(10, 18)}</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      {firstJSX()}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);