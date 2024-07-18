import React from 'react'
import cl from './TheButton.module.css'
//FOR SORT MODAL
export const TheButton = ({children}) => {
  return (
    <button className={cl.theBtn}>
        {children}
    </button>
  )
}