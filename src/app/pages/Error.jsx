import React from 'react'
import { MdError } from "react-icons/md";
export const Error = () => {
  return (
    <div style={{margin: '20px', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
        <MdError style={{fontSize: '45px', margin: '15px auto'}}/>
        <p>Page not found</p>
    </div>
  )
}
