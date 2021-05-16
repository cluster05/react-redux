import React from "react";
import "./App.css"
import Counter from "./components/Counter/Counter";
import CounterControl from "./components/CounterControl/CounterControl";
import {
  DECREMENT,
  DECREMENT_BY_10,
  INCREMENT,
  INCREMENT_BY_10,
} from './store/action/counter';
import {
  decrement,
  decrementBy10,
  increment,
  incrementBy10,
  asyncRemoveValue,
  asyncSaveValue
} from './store/actionEnhancer/index';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div className="APP">
        <CounterControl
          payload={1}
          title={INCREMENT}
          clickHandler={this.props.onIncrementCounter} />
        <CounterControl
          payload={-1}
          title={DECREMENT}
          clickHandler={this.props.onDecrementCounter} />
        <CounterControl
          payload={10}
          title={INCREMENT_BY_10}
          clickHandler={this.props.onIncrementCounterBy10} />
        <CounterControl
          payload={-10}
          title={DECREMENT_BY_10}
          clickHandler={this.props.onDecrementCounterBy10} />
        <Counter counter={this.props.counter} />


        <button onClick={() => this.props.saveResult(this.props.counter)}>SAVE RESULT</button>

        <h2>Result Saved</h2>
        <ul>
          {this.props.results.map(result => (
            <li key={result.id}>
              <p>  {result.value}  </p>
              <span
                onClick={() => this.props.removeResult(result.id)}
              > Delete </span>
            </li>
          ))
          }
        </ul>

      </div >
    )
  }

}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  }
}

const mapReducerToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onIncrementCounterBy10: () => dispatch(incrementBy10()),
    onDecrementCounterBy10: () => dispatch(decrementBy10()),
    saveResult: (counter) => dispatch(asyncSaveValue(counter)),
    removeResult: (id) => dispatch(asyncRemoveValue(id)),

  }

}

export default connect(mapStateToProps, mapReducerToProps)(App);
