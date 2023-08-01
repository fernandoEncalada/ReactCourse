import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  
    const { counter, increment, decrement, reset } = useCounter();
  
    return (
    <>
    <h2>Counter with custom hook: { counter }</h2>
    <hr />

    <button className='btn btn-primary' onClick={ () => increment(2) }>+1</button>
    <button className='btn btn-primary' onClick={ reset }>Reset</button>
    <button className='btn btn-primary' onClick={ () => decrement(2) }>-1</button>
    </>
  )
}
