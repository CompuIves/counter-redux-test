import React, { Component } from 'react';
import styles from '../../css/app.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/counter';

import Counter from './Counter';

class Home extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

function select(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(select, mapDispatchToProps)(Counter);
