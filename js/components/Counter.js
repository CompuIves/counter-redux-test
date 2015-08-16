import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <p>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
