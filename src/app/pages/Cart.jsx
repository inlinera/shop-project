import React, { useState, useEffect } from 'react';
import { CartItem } from '../components/CartItem/CartItem';

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [finalCost, setFinalCost] = useState(0);

    const removeFromCart = id => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        calculateFinalCost(updatedItems);
    };

    const calculateFinalCost = items => {
        const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
        setFinalCost(total);
    };

    const updateItemCount = (id, count) => {
        const updatedItems = cartItems.map(item => 
            item.id === id ? { ...item, count: count } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        calculateFinalCost(updatedItems);
    };

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemsWithCount = items.map(item => ({ ...item, count: item.count || 1 }));
        setCartItems(itemsWithCount);
        calculateFinalCost(itemsWithCount);
    }, []);

    return (
        <>
            <div className='cart_state'>
                <h2>Cart</h2>
                {cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <CartItem 
                                id={item.id} 
                                image={item.image} 
                                type={item.type} 
                                name={item.name} 
                                price={item.price}
                                count={item.count}
                                setCount={(count) => updateItemCount(item.id, count)}
                                removeFromCart={removeFromCart} 
                                key={item.id}
                            />
                        ))}
                    </ul>
                )}
            </div>
            {cartItems.length !== 0 
                ? <div className='cart_totalCost'>
                    <h2>Total Cost: {finalCost}$</h2>
                </div>
                : ''
            }
        </>
    );
};
