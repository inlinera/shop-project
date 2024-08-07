import React from 'react'
import cl from './Counter.module.css'
export const Counter = ({count, setCount, disabled}) => {
  const handleIncrement = () => {
    if (count < 10) {
        setCount(count + 1);
    }
};

const handleDecrement = () => {
  if (count > 1) {
      setCount(count - 1);
  }
};

  return (
    <div className={cl.counter}>
        <button className={cl.counter_btn} onClick={handleDecrement} 
        disabled={disabled.decrement}>
            -
            </button>
            <input type="number" value={count}
             onChange={(e) => setCount(Math.min(10, Math.max(1, parseInt(e.target.value))))}
             max="10" min="1" />
        <button className={cl.counter_btn} onClick={handleIncrement}  
        disabled={disabled.increase}>
            +
            </button>
    </div>
  )
}