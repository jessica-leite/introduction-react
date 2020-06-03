import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      cup: 'water'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        cup: 'juice'
      })
    }, 3000);
  }

  updateCup = () => {
    this.setState({
      cup: 'coffee'
    });
  }

  render() {
    const { clock, cup } = this.state;
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.updateCup()}><b>{cup}</b></button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);