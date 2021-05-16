import React from "react";
import Counter from "./compoents/Counter/Counter";
import CounterControl from "./compoents/CounterControl/CounterControl";
import * as counterActionType from './store/action/counter';
import * as resultActionType from './store/action/result';
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
          title={counterActionType.INCREMENT}
          clickHandler={this.props.onIncrementCounter} />
        <CounterControl
          payload={-1}
          title={counterActionType.DECREMENT}
          clickHandler={this.props.onDecrementCounter} />
        <CounterControl
          payload={10}
          title={counterActionType.INCREMENT_BY_10}
          clickHandler={this.props.onIncrementCounterBy10} />
        <CounterControl
          payload={-10}
          title={counterActionType.DECREMENT_BY_10}
          clickHandler={this.props.onDecrementCounterBy10} />
        <Counter counter={this.props.counter} />
        <button onClick={() => this.props.saveResult(this.props.counter)}>save result</button>

        <ul>
          {this.props.results.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.removeResult(result.id)}
            > {result.value}  </li>
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
    onIncrementCounter: () => dispatch({ type: counterActionType.INCREMENT, payload: { value: 1 } }),
    onDecrementCounter: () => dispatch({ type: counterActionType.INCREMENT, payload: { value: -1 } }),
    onIncrementCounterBy10: () => dispatch({ type: counterActionType.INCREMENT, payload: { value: 10 } }),
    onDecrementCounterBy10: () => dispatch({ type: counterActionType.INCREMENT, payload: { value: -10 } }),
    saveResult: (counter) => dispatch({ type: resultActionType.SAVE_RESULT, payload: { counter } }),
    removeResult: (id) => dispatch({ type: resultActionType.REMOVE_RESULT, payload: { id } }),

  }

}

export default connect(mapStateToProps, mapReducerToProps)(App);
