import React, { useCallback, useState } from 'react';
import cl from './ProductItem.module.scss';
//COMPONENTS
import { RoundLoader } from '../UI/MyLoader-2/RoundLoader';
import {CartItemAdd} from '../AllModals/CartItemAdd'
//ICONS
import { LuShoppingCart } from "react-icons/lu";

const ProductItem = ({ id, image, name, price, type }) => {
    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState(image[0]);

    const [cartState, setCartState] = useState(null)
    const [isModalActive, setIsModalActive] = useState(false)

    const handleImageLoad = useCallback(() => setLoading(false), []);

    const handleMouseEnter = useCallback(() => {
        if (image && image.length > 1) {
            setLoading(true);
            const img = new Image();
            img.src = image[1];
            img.onload = () => {
                setImageSrc(image[1]);
                setLoading(false);
            };
        } else if (image && image.length === 1) {
            setImageSrc(image[0]);
        }
    }, [image]);

    const handleMouseLeave = useCallback(() => {
        setLoading(false);
        setImageSrc(image[0]);
    }, [image]);

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const newItem = { id, image, name, price, type };
    
        const itemExists = cartItems.some(item => item.id === id);
        setIsModalActive(true)
    
        if (!itemExists) {
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, newItem]));
            setCartState(true)
        } else {
            console.log('Item already in cart');
            setCartState(false)
        }
    };

    return (
        <>
        <CartItemAdd active={isModalActive} setActive={setIsModalActive} state={cartState}/>
        <div key={name} className={cl.product} loading="lazy">
            <div className={cl.product_image}>
                {loading && <RoundLoader />}
                <img 
                    src={imageSrc} 
                    onLoad={handleImageLoad}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={cl.product_image_preview} 
                    alt={type} 
                />
            </div>
            <div className={cl.product_info}>
                <p>{name}</p>
                <span>{price}$</span>
            </div>
            <div className={cl.product_cart}>
                <button onClick={addToCart}>
                    <LuShoppingCart style={{fontSize: '18px'}}/>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
        </>
    );
};

export default ProductItem;
