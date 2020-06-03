import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const customerList = [
  {
    id: 1,
    name: 'Julia Pacheco'
  },
  {
    id: 2,
    name: 'Michael Pereira'
  },
  {
    id: 3,
    name: 'Maria Antunes'
  }
];

const App = () => {

  const renderCustomers = (customer) => {
    return (
      <li key={`customer-${customer.id}`}>{customer.name}</li>
    )
  };

  return (
    <div>
      <ul>
        {customerList.map(renderCustomers)}
      </ul>
    </div >
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);