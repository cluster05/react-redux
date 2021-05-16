import { useState } from "react";
import Counter from "./compoents/Counter/Counter";
import CounterControl from "./compoents/CounterControl/CounterControl";

function App() {

  const [counter, setCounter] = useState(0);

  const clickHandler = (action, payload) => {
    switch (action) {
      case 'INCREMENT':
        setCounter(counter + payload)
        break;
      case 'DECREMENT':
        setCounter(counter + payload)
        break;
      case 'INCREMENT_BY_10':
        setCounter(counter + payload)
        break;
      case 'DECREMENT_BY_10':
        setCounter(counter + payload)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <CounterControl
        payload={1}
        title="INCREMENT"
        clickHandler={clickHandler} />
      <CounterControl
        payload={-1}
        title="DECREMENT"
        clickHandler={clickHandler} />
      <CounterControl
        payload={10}
        title="INCREMENT_BY_10"
        clickHandler={clickHandler} />
      <CounterControl
        payload={-10}
        title="DECREMENT_BY_10"
        clickHandler={clickHandler} />
      <Counter counter={counter} />

    </div>
  );
}

export default App;
