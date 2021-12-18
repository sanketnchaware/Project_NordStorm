import React from 'react'
import "./NavDrop.css"
import { Link } from 'react-router-dom'
export const NavDrop = () => {
    return (
        <div className="wrapper">
            <div class="bar">
                <div class="dropdown">
                    <button class="dropbtn" id="margin-left">
                        <div className="gift-logo" >
                            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.11111 10.524H16.5556V16.0002H2.11111V10.524ZM1 6.95264H17.6667V10.524H1V6.95264Z" stroke="#D61F27" />
                                <path d="M9.33337 6.72314V15.7707" stroke="#D61F27" stroke-width="2" />
                                <path d="M14.7278 1.35491C13.9745 0.579915 12.2367 1.11801 10.8411 2.55966C10.5811 2.83018 10.3446 3.12544 10.1345 3.4418C9.29891 4.66798 9.07002 5.95011 9.67447 6.57391C10.4256 7.35129 12.1678 6.8132 13.5611 5.37273C13.7567 5.17154 13.93 4.96202 14.0889 4.7525C15.0734 3.45013 15.3745 2.02514 14.7278 1.35491V1.35491ZM3.93891 1.35491C4.69002 0.578725 6.43224 1.11801 7.82669 2.55966C8.10002 2.84299 8.33113 3.14061 8.53558 3.4418C9.36891 4.66798 9.5978 5.95011 8.99224 6.57391C8.24113 7.35129 6.50113 6.8132 5.10335 5.37273C4.91759 5.17693 4.74249 4.96984 4.57891 4.7525C3.59224 3.45013 3.29113 2.02514 3.93891 1.35491Z" stroke="#D61F27" />
                            </svg>

                            <p style={{ fontWeight: "700" }}> Holiday Gifts</p>
                        </div>
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">
                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Men
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">

                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Women
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">

                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Kids
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">


                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Young Adults
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">


                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn"> Active wear
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">
                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>


                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Home
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">

                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Beauty
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">
                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>



                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Designer
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">
                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>


                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Sale
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">
                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>


                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn margin">Brand
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <div class="row">
                            <div class="column">
                                <h4>Men: Get Inspired</h4>
                                <h4>New Arrivals</h4>
                                <h4>ASOS</h4>
                                <h4>Black-Owned & -Founded Brands</h4>
                                <h4>Crazy Shop</h4>
                                <h4>Men's Looks</h4>
                                <h4>Men's Wedding Guest Attire</h4>
                                <h4>New Concepts: Make it Bazar</h4>
                                <h4>Nordstorm Made</h4>
                                <h4>Sports Fan Shop</h4>
                                <h4>Sustainable Style</h4>
                                <h4>Shop by Occasion</h4>

                            </div>
                            <div class="column">
                                <h4>Clothing</h4>
                                <Link to="/product">Activewear</Link>
                                <Link to="/product">Blazers & Sports Coats</Link>
                                <Link to="/product">Coats & Jackets 3</Link>
                                <Link to="/product">Dress Shirts</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Joggers & Sweatpants</Link>
                                <Link to="/product">Lounge, Pajamas & Robes</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Polo Shit</Link>
                                <Link to="/product">Shirts</Link>
                                <Link to="/product">Shorts</Link>
                                <Link to="/product">Socks</Link>
                                <Link to="/product">Suits & Separates</Link>
                                <Link to="/product">Sweaters</Link>
                                <Link to="/product">Sweatshirts & Hoodies</Link>
                                <Link to="/product">Swimwear & Board Shorts</Link>
                                <Link to="/product">T-Shirts</Link>
                                <Link to="/product">Underwear & Boxers</Link>
                            </div>
                            <div class="column">
                                <h4>Shoes</h4>
                                <Link to="/product">Boots</Link>
                                <Link to="/product">Comfort</Link>
                                <Link to="/product">Dress Shoes</Link>
                                <Link to="/product">Loafers & Slip-Ons </Link>
                                <Link to="/product">Oxfords & Derbys</Link>
                                <Link to="/product">Running Shoes</Link>
                                <Link to="/product">Sandals & Flip-Flops</Link>
                                <Link to="/product">Shoe Care & Accessories</Link>
                                <Link to="/product">Slippers</Link>
                                <Link to="/product">Sneakers & Athletic</Link>
                                <Link to="/product">Sneaker Release Calendar</Link>

                            </div>
                            <div class="column">
                                <h4>Accessories</h4>
                                <Link to="/product">Bags & Backpacks</Link>
                                <Link to="/product">Belts</Link>
                                <Link to="/product">Face Masks</Link>
                                <Link to="/product">Gloves</Link>
                                <Link to="/product">Hats</Link>
                                <Link to="/product">Headphones</Link>
                                <Link to="/product">Jewelry & Cuff Links</Link>
                                <Link to="/product">Phone Cases</Link>
                                <Link to="/product">Scarves</Link>
                                <Link to="/product">Sunglasses & Eyewear</Link>
                                <Link to="/product">Tie & pocket Squares</Link>
                                <Link to="/product">Wallets & Card Cases</Link>
                                <Link to="/product">Watches</Link>
                                <h4> Luggage & Travel</h4>

                            </div>
                            <div class="column">
                                <h4>Designer</h4>

                                <Link to="/product">Designer Clothing</Link>
                                <Link to="/product">Designer Shoes</Link>
                                <Link to="/product">Designer Accessories</Link>

                                <h4>Big & Tall</h4>
                                <Link to="/product">Clothing</Link>
                                <Link to="/product">Jeans</Link>
                                <Link to="/product">Pants</Link>
                                <Link to="/product">Shirts</Link>

                                <h4>Grooming & Cologne</h4>
                                <Link to="/product">Body Care & Deodorant</Link>
                                <Link to="/product">Cologne</Link>
                                <Link to="/product">Dopp Kitts & Toiletry Bags</Link>
                                <Link to="/product">Gifts & Sets</Link>
                                <Link to="/product">Hair Products</Link>
                                <Link to="/product">Shaving & Beard Care</Link>
                                <Link to="/product">Skin Care</Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )


}
