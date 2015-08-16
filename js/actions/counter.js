import * as ActionTypes from '../constants/ActionTypes';

export function increment() {
  return {
    type: ActionTypes.INCREMENT_COUNTER
  };
}


export function decrement() {
  return {
    type: ActionTypes.DECREMENT_COUNTER
  };
}
