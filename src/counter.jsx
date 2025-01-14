import React from 'react'
import { useState } from 'react'

// const [state, setState] = useState(0)

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count +1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter


// ternary(sp?) operators
// 