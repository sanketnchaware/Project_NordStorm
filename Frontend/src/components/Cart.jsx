import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Navbar } from '../components/Navbar'
import { EmptyCart } from './EmptyCart'
import { FilledCart } from './FilledCart'

export const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log('cart:', cart)
    return (
        <div>


            {
                cart.length === 0 ? <EmptyCart /> : <FilledCart />
            }


        </div>
    )

}
