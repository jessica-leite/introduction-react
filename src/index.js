import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const customerButton = <button>There's a customer here!</button>;

const hasCustomer = false;

const App = () => {

  return (
    <div>
      {hasCustomer && (
        <Fragment>
          {customerButton}
        </Fragment>
      )}
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);