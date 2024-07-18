import React from 'react'
import cl from './Modal.module.css'
//ICONS
import { RxCross2 } from "react-icons/rx";

export const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? `${cl.modal} ${cl.active}` : cl.modal} onClick={() => setActive(false)}>
        <div className={active ? `${cl.modal__content} ${cl.active}` : cl.modal__content}
         onClick={e => e.stopPropagation()}>
          <button className={cl.closeBtn} onClick={() => setActive(false)}>
          <RxCross2/>
          </button>
            {children}
        </div>
    </div>
  )
}
