import React from 'react'
import Count from './Count'
import Button from './Button'

const Counter = ({ id, count, increment, decrement }) => {
    return (
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count} />
            <div class="flex space-x-3">
                <Button handler={() => increment(id)}>Increment</Button>
                <Button color='red' handler={() => decrement(id)}>Decrement</Button>
            </div>
        </div>
    )
}

export default Counter