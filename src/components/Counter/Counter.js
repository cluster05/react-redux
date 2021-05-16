import React from 'react'
import './Counter.css'

const Counter = ({ counter }) => {
    return (
        <div className="FICE">
            <div className="COUNTER">
                {counter}
            </div>
        </div>
    )
}

export default Counter
