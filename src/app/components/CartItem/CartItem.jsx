import React, { useEffect, useState } from 'react'
import cl from './CartItem.module.scss'
import { FaTrash } from "react-icons/fa6";
import { Counter } from '../UI/Counter/Counter';

export const CartItem = ({id, image, type, name, price, count, setCount, removeFromCart}) => {
    const [disabled, setDisabled] = useState({decrement: true, increase: false})

    useEffect(() => {
        if (count <= 1) {
            setDisabled({decrement: true, increase: false})
        } else if (count > 1 && count < 10) {
            setDisabled({decrement: false, increase: false})
        } else if (count >= 10) {
            setDisabled({decrement: false, increase: true})
        }
    }, [count])

    return (
        <li>
            <div className={cl.cart_info}>
                <img src={image[0]} alt={type} width="80" />
                <p>{name}</p>
            </div>
            <div className={cl.cart_state_end}>
                <Counter count={count} setCount={setCount} disabled={disabled}/>
                <span>{price}$</span>
                <button onClick={() => removeFromCart(id)} className={cl.cartItem_btn}><FaTrash /></button>
            </div>
        </li>
    )
}
