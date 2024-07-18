import React from 'react'
import './style.css'
export const TheBtnHeader = ({children}) => {
  return (
    <button className='theBtnHeader'>
      {children}
    </button>
  )
}