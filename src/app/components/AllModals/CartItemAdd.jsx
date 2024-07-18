import React from 'react'
//COMPONENTS
import { Modal } from '../UI/ModalWindow/Modal'
//ICONS
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineErrorOutline } from "react-icons/md";

export const CartItemAdd = ({active, setActive, state}) => {
  const styles = {
    fontSize: '39px', color: state ? 'green' : 'red'
  }
  return (
    <Modal active={active} setActive={setActive}>
      {state 
      ? <>
      <GoCheckCircle style={styles}/>
      <p>Succesful!</p>
      </>

      : <>
      <MdOutlineErrorOutline style={styles}/>
      <p>Error!</p>
      </>
      }
    </Modal>
  )
}
