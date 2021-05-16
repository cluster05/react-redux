import React from "react";
import Counter from "./compoents/Counter/Counter";
import CounterControl from "./compoents/CounterControl/CounterControl";
import * as actionType from './store/action/counter';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CounterControl
          payload={1}
          title={actionType.INCREMENT}
          clickHandler={this.props.onIncrementCounter} />
        <CounterControl
          payload={-1}
          title={actionType.DECREMENT}
          clickHandler={this.props.onDecrementCounter} />
        <CounterControl
          payload={10}
          title={actionType.INCREMENT_BY_10}
          clickHandler={this.props.onIncrementCounterBy10} />
        <CounterControl
          payload={-10}
          title={actionType.DECREMENT_BY_10}
          clickHandler={this.props.onDecrementCounterBy10} />
        <Counter counter={this.props.counter} />

      </div >
    )
  }

}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapReducerToProps = dispatch => {

  return {
    onIncrementCounter: () => dispatch({ type: actionType.INCREMENT, payload: { value: 1 } }),
    onDecrementCounter: () => dispatch({ type: actionType.INCREMENT, payload: { value: -1 } }),
    onIncrementCounterBy10: () => dispatch({ type: actionType.INCREMENT, payload: { value: 10 } }),
    onDecrementCounterBy10: () => dispatch({ type: actionType.INCREMENT, payload: { value: -10 } }),
  }

}

export default connect(mapStateToProps, mapReducerToProps)(App);
