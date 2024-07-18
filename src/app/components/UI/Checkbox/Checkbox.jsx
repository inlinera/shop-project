import React from 'react'
import cl from './Checkbox.module.css'
export const Checkbox = ({children, checked, onChange}) => {
  return (
    <label className={cl.checkbox_wrapper}>
        <input type='checkbox' className={cl.checkbox_element} checked={checked} onChange={onChange}/>
        {children}
    </label>
  )
}
