import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const showEvent = () => {
  alert('Clicked');
};

const Button = <button onClick={showEvent}>Click me</button>;

const handleChange = (e) => {
  const { value } = e.target;
  console.log(e);
  console.log(value);
};

const App = () => {

  return (
    <div>
      <input onChange={handleChange} />
      {Button}
    </div >
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);