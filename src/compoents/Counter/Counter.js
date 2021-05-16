import React from 'react'

const Counter = ({ counter }) => {
    return (
        <div
            style={{
                background: 'black',
                color: 'white',
                padding: '1rem',
                margin: '1rem',
                width: '140px',
                textAlign: 'center'
            }}
        >
            { counter}
        </div>
    )
}

export default Counter
