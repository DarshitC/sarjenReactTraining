import React from 'react';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(localStorage.getItem('counter')) || 0
    };
  }

  incrementCounter = () => {
    this.setState(prevState => {
      const newCount = prevState.count + 1;
      localStorage.setItem('counter', newCount);
      return { count: newCount };
    });
  };

  decrementCounter = () => {
    this.setState(prevState => {
      const newCount = prevState.count - 1;
      localStorage.setItem('counter', newCount);
      return { count: newCount };
    });
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </>
    );
  }
}

export default CounterApp;