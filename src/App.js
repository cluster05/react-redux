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
  asyncSaveValue,
} from './store/actionEnhancer/index';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.ctr.counter)
  const results = useSelector(state => state.res.results)

  return (
    <div className="APP">
      <CounterControl
        payload={1}
        title={INCREMENT}
        clickHandler={() => dispatch(increment())} />
      <CounterControl
        payload={-1}
        title={DECREMENT}
        clickHandler={() => dispatch(decrement())} />
      <CounterControl
        payload={10}
        title={INCREMENT_BY_10}
        clickHandler={() => dispatch(incrementBy10())} />
      <CounterControl
        payload={-10}
        title={DECREMENT_BY_10}
        clickHandler={() => dispatch(decrementBy10())} />
      <Counter counter={counter} />

      <button onClick={() => dispatch(asyncSaveValue(counter))}>SAVE RESULT</button>

      <h2>Result Saved</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <p>  {result.value}  </p>
            <span
              onClick={() => dispatch(asyncRemoveValue(result.id))}
            > Delete </span>
          </li>
        ))
        }
      </ul>
    </div >
  )
}

export default App;