import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const element = 'Have a nice day';
const element2 = <h1>I believe you</h1>

const App = () => {
  return (
    <Fragment>
      {element}
      {element2}
    </Fragment>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);