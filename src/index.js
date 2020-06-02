import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import './styles.css';

function sum(a, b) {
  alert(a + b);
}

const App = () => {

  return (
    <div className="App">
      Estoy aquí
      <Button onClick={() => sum(10, 20)} name="Gilbertina Castro" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => sum(10, 18)} name="Dilúcio Alves" />
        </ComponentB>
      </ComponentA>
    </div >
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);