import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartProvider(props) {
    const [cartItems, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(cartItems.concat(product))
    }

    return <CartContext.Provider
    value={{
        cartItems : cartItems,
        addToCart : addToCart
    }}>
        {props.children}
    </CartContext.Provider>
}