import React from 'react'

const CounterControl = ({ title, clickHandler, payload }) => {
    return (
        <div
            style={{
                background: 'black',
                color: 'white',
                padding: '1rem',
                margin: '1rem',
                width: 'max-content',
                display: 'inline-block',
                cursor: 'pointer'
            }}
            onClick={() => clickHandler(title, payload)}
        >
            {title}
        </div>
    )
}

export default CounterControl
