import React from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    const addToCart = (newCart) => {
        setCart([...cart, newCart])
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
