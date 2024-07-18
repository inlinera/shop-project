import React from 'react'
import cl from './Radio.module.css'
export const Radio = ({children, checked, onChange}) => {
  return (
    <label className={cl.radio_wrapper}>
        <input type='radio' className={cl.radio_element} checked={checked} onChange={onChange}/>
        {children}
    </label>
  )
}
