import React from 'react'
import cl from './Counter.module.css'
export const Counter = ({count, setCount, disabled}) => {
  return (
    <div className={cl.counter}>
        <button className={cl.counter_btn} onClick={() => setCount(count - 1)} 
        disabled={disabled.decrement}>
            -
            </button>
        <input type='number' value={count} onChange={e => setCount(e.target.value)}></input>
        <button className={cl.counter_btn} onClick={() => setCount(count + 1)}  
        disabled={disabled.increase}>
            +
            </button>
    </div>
  )
}