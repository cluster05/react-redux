import React from 'react'

const CounterControl = ({ title, clickHandler, payload }) => {
    return (
        <button
            className="COUNTER_CONTROL"
            onClick={() => clickHandler(title, payload)}
        >
            {title}
        </button>
    )
}

export default CounterControl
