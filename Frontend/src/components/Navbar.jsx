import React from 'react'
import "../style.css"
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from "react-router-dom"
import { NavDrop } from './NavDrop'
export const Navbar = () => {

    const { cart, addToCart } = useContext(CartContext);

    return (
        < >
            <div className="black-navbar">
                <p>Shipping outside of the  U.S. or Canada? Learn About International Shipping</p>
            </div>

            <div className="navbar" >
                <div className="top-navbar">
                    <Link to="/">
                        <h1>NORDSTORM</h1>
                    </Link>
                    <div className="top-navbar nav-right-part" >
                        <div className="search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8215 16.5781L16.58 14.8205L22 20.2435L20.2414 22.0011L14.8215 16.5781Z" stroke="black" />
                                <path d="M15.334 15.3338L14.3083 14.3081" stroke="black" />
                                <path d="M9.17987 16.3597C13.1452 16.3597 16.3597 13.1452 16.3597 9.17987C16.3597 5.21454 13.1452 2 9.17987 2C5.21454 2 2 5.21454 2 9.17987C2 13.1452 5.21454 16.3597 9.17987 16.3597Z" stroke="black" />
                            </svg>

                            <p style={{ color: "#000000", fontWeight: "700" }}>Search</p>
                        </div>
                        <p style={{ color: "#000000", fontWeight: "700" }}>Sign In

                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 7.5L7.14645 7.85355C7.34171 8.04882 7.65829 8.04882 7.85355 7.85355L7.5 7.5ZM14.8536 0.853553C15.0488 0.658291 15.0488 0.341709 14.8536 0.146447C14.6583 -0.0488155 14.3417 -0.0488156 14.1464 0.146447L14.8536 0.853553ZM0.853554 0.146446C0.658291 -0.0488162 0.341709 -0.0488162 0.146446 0.146446C-0.0488157 0.341708 -0.0488157 0.658291 0.146446 0.853553L0.853554 0.146446ZM7.85355 7.85355L14.8536 0.853553L14.1464 0.146447L7.14645 7.14645L7.85355 7.85355ZM0.146446 0.853553L7.14645 7.85355L7.85355 7.14645L0.853554 0.146446L0.146446 0.853553Z" fill="black" />
                            </svg>


                        </p>



                        <Link></Link>

                        <div className="cart-icon-div">
                            <Link to="/cart">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 8.97662C22 8.72991 21.9084 8.4933 21.7453 8.31885C21.5822 8.14439 21.3611 8.04639 21.1304 8.04639H2.86957C2.63894 8.04639 2.41776 8.14439 2.25469 8.31885C2.09161 8.4933 2 8.72991 2 8.97662V21.0696C2 21.3164 2.09161 21.553 2.25469 21.7274C2.41776 21.9019 2.63894 21.9999 2.86957 21.9999H21.1304C21.3611 21.9999 21.5822 21.9019 21.7453 21.7274C21.9084 21.553 22 21.3164 22 21.0696V8.97662Z" stroke="black" />
                                    <path d="M6.78259 7.5814C6.78259 6.10112 7.33228 4.68147 8.31073 3.63475C9.28918 2.58804 10.6162 2 12 2C13.3837 2 14.7108 2.58804 15.6892 3.63475C16.6677 4.68147 17.2174 6.10112 17.2174 7.5814" stroke="black" />
                                </svg>

                                <p className="cart-total">{cart.length}</p>

                            </Link>
                        </div>

                    </div>
                </div>



                <NavDrop />

            </div>






        </>
    )
}
