import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const customerButton = <button>There's a customer here!</button>;

const hasCustomer = true;

const App = () => {

  const renderCustomer = (
    <Fragment>
      {customerButton}
    </Fragment>
  );

  const renderRegister = (
    <Fragment>
      <button>Register a customer</button>
    </Fragment >
  );

  return (
    <div>
      {hasCustomer ? renderCustomer : renderRegister}
    </div >
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);