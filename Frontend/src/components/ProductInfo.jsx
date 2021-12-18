import React from "react";
import { Navbar } from "./Navbar";
import { Reviews } from "./Reviews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import bag1 from "../utils/Images/bag1.png";
import bag2 from "../utils/Images/bag2.png";
import bag3 from "../utils/Images/bag3.png";
import bag4 from "../utils/Images/bag4.png";
import bag5 from "../utils/Images/bag5.png";
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Specification = styled.div`
display:grid;
grid-template-columns:80% 20%;
/* background-color:red; */
margin: 1rem;
`

const Question = styled.div`
margin: 1rem;
p{
    margin-top: 1.5rem;
}

button{
    margin-top: 1.5rem;
    width: 20%;
    padding: 0.5rem;
    font-size: 1rem;
}
`




export const ProductInfo = () => {
    const [details, setDetails] = useState([]);
    console.log("details:", details);


    const { cart, addToCart } = useContext(CartContext);
    console.log('addToCart:', addToCart)
    console.log('cart:', cart)
    const data = useParams();





    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios
            .get(`http://localhost:2325/product/single/${data.id}`)
            .then((res) => {
                setDetails(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Navbar />

            <div className="horizontal-line">{/* horizontal line */}</div>

            <Link to="/product" style={{ margin: "1rem" }}>

                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8L0.646447 8.35355C0.451184 8.15829 0.451184 7.84171 0.646447 7.64645L1 8ZM7.64645 0.646447C7.84171 0.451184 8.15829 0.451184 8.35355 0.646447C8.54882 0.841709 8.54882 1.15829 8.35355 1.35355L7.64645 0.646447ZM8.35355 14.6464C8.54882 14.8417 8.54882 15.1583 8.35355 15.3536C8.15829 15.5488 7.84171 15.5488 7.64645 15.3536L8.35355 14.6464ZM0.646447 7.64645L7.64645 0.646447L8.35355 1.35355L1.35355 8.35355L0.646447 7.64645ZM7.64645 15.3536L0.646447 8.35355L1.35355 7.64645L8.35355 14.6464L7.64645 15.3536Z" fill="black" />
                </svg>

                Back to Results</Link>

            <div className="all-prod-details">
                <div className="prod-images">
                    <img src={bag1} alt="" />
                    <img src={bag2} alt="" />
                    <img src={bag3} alt="" />
                    <img src={bag4} alt="" />
                    <img src={bag5} alt="" />
                </div>

                <div className="prod-info">
                    <p className="p1-info"> {details.productName}</p>
                    <p className="p2-info">{details.brand}</p>
                    {/* <p>{details.description}</p> */}
                    <p className="p3-info">INR {details.price}</p>
                    <p className="p4-info">
                        Price varies with currency exchange rates and may be different than
                        in store.
                    </p>

                    <select>
                        <option value="">Ochre</option>
                        <option value="">Sky Blue</option>
                        <option value="">Pink</option>
                        <option value="">Orchid</option>
                        <option value="">Dahlia</option>
                        <option value="">Graphite-Un Blue</option>
                    </select>

                    <div className="color-palates">

                        <svg width="400" height="172" viewBox="0 0 400 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_385_11711)">
                                <rect width="400" height="172" fill="white" />
                                <circle cx="20" cy="24.0001" r="13.3333" fill="#F5B700" />
                                <circle cx="20" cy="24" r="16.5" stroke="black" />
                                <circle cx="20" cy="74.0001" r="13.3333" fill="#807B6D" />
                                <circle cx="20" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="20" cy="124" r="13.3333" fill="#03486E" />
                                <circle cx="20" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="20" cy="174" r="13.3333" fill="#FD6888" />
                                <circle cx="20" cy="174" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="70" cy="24.0001" r="13.3333" fill="#B0D1D8" />
                                <circle cx="70" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="70" cy="74.0001" r="13.3333" fill="#C7A1CB" />
                                <circle cx="70" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="70" cy="124" r="13.3333" fill="#555559" />
                                <circle cx="70" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="70" cy="174" r="13.3333" fill="#424B2A" />
                                <circle cx="70" cy="174" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="120" cy="24.0001" r="13.3333" fill="#373438" />
                                <circle cx="120" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="120" cy="74.0001" r="13.3333" fill="#0691E2" />
                                <circle cx="120" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="120" cy="124" r="13.3333" fill="#EB7B6E" />
                                <circle cx="120" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="120" cy="174" r="13.3333" fill="#61B5C6" />
                                <circle cx="120" cy="174" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="220" cy="24.0001" r="13.3333" fill="#E3952E" />
                                <circle cx="220" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="220" cy="74.0001" r="13.3333" fill="#4A4F49" />
                                <circle cx="220" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="220" cy="124" r="13.3333" fill="#851F04" />
                                <circle cx="220" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="170" cy="24.0001" r="13.3333" fill="#4D6A89" />
                                <circle cx="170" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="170" cy="74.0001" r="13.3333" fill="#655D3E" />
                                <circle cx="170" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="170" cy="124" r="13.3333" fill="#60511B" />
                                <circle cx="170" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="170" cy="174" r="13.3333" fill="#EBDD89" />
                                <circle cx="170" cy="174" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="270" cy="24.0001" r="13.3333" fill="#E7969B" />
                                <circle cx="270" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="270" cy="74.0001" r="13.3333" fill="#9D3039" />
                                <circle cx="270" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="270" cy="124" r="13.3333" fill="#CC3F31" />
                                <circle cx="270" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="320" cy="24.0001" r="13.3333" fill="#EB9D31" />
                                <circle cx="320" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="320" cy="74.0001" r="13.3333" fill="#343A43" />
                                <circle cx="320" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="320" cy="124" r="13.3333" fill="#CFBACB" />
                                <circle cx="320" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="370" cy="24.0001" r="13.3333" fill="#AAAAAA" />
                                <circle cx="370" cy="24" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="370" cy="74.0001" r="13.3333" fill="#C37A19" />
                                <circle cx="370" cy="74" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <circle cx="370" cy="124" r="13.3333" fill="#40593C" />
                                <circle cx="370" cy="124" r="16.25" stroke="#E3E3E3" stroke-width="0.5" />
                                <rect x="400" y="142" width="4" height="142" transform="rotate(-180 400 142)" fill="#E6E6E6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_385_11711">
                                    <rect width="400" height="172" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>



                    <div>
                        <Link to="/cart">

                            <button type="submit" className="add-to-bag" onClick={() => {
                                addToCart(details)
                            }}>
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.8333 4.18521H10.6108C10.6108 2.06159 8.99083 0.333252 7 0.333252C5.00917 0.333252 3.38917 2.06159 3.38917 4.18521H1.16667C0.948146 4.18279 0.73767 4.275 0.581435 4.44162C0.4252 4.60823 0.335972 4.83564 0.333334 5.07392L0.333334 12.7778C0.335972 13.0161 0.4252 13.2435 0.581435 13.4101C0.73767 13.5767 0.948146 13.669 1.16667 13.6665H12.8333C13.0519 13.669 13.2623 13.5767 13.4186 13.4101C13.5748 13.2435 13.664 13.0161 13.6667 12.7778V5.07392C13.664 4.83564 13.5748 4.60823 13.4186 4.44162C13.2623 4.275 13.0519 4.18279 12.8333 4.18521V4.18521ZM7 0.925721C8.68417 0.925721 10.0558 2.38781 10.0558 4.18521H3.94417C3.94417 2.38781 5.31583 0.925721 7 0.925721ZM10.2208 6.94855L6.91 11.6192C6.86153 11.6871 6.80053 11.743 6.73094 11.7835C6.66136 11.8239 6.58475 11.848 6.50609 11.8541C6.42744 11.8602 6.34848 11.8481 6.27436 11.8188C6.20024 11.7895 6.1326 11.7435 6.07583 11.6838L3.83167 9.31934C3.77996 9.26517 3.73873 9.20026 3.71042 9.12843C3.6821 9.0566 3.66727 8.97931 3.6668 8.90113C3.66634 8.82294 3.68024 8.74545 3.7077 8.67323C3.73516 8.601 3.77561 8.53551 3.82667 8.48061C3.9315 8.36889 4.07199 8.30588 4.21857 8.30487C4.36516 8.30385 4.50638 8.3649 4.6125 8.47516L6.40583 10.3643L9.33417 6.23341C9.42459 6.10746 9.5565 6.02494 9.70185 6.00339C9.8472 5.98184 9.99452 6.02296 10.1125 6.11801C10.1705 6.16402 10.2195 6.22228 10.2565 6.28932C10.2935 6.35636 10.3177 6.43082 10.3279 6.50828C10.338 6.58574 10.3337 6.66463 10.3153 6.74026C10.2969 6.81589 10.2648 6.88672 10.2208 6.94855V6.94855Z"
                                        fill="white"
                                    />
                                </svg>
                                In Your Bag
                            </button>
                        </Link>


                    </div>
                </div>
            </div>

            <div className="horizontal-line">{/* horizontal line */}</div>



            <Specification>

                <div className="left-specs">
                    <div>

                        <ul>
                            <h3>SIZE INFO</h3>
                            <li>
                                14"H x 10"W x 4 ½"D. (Interior capacity: medium.)
                            </li>
                            <li>
                                3 ½" strap drop.
                            </li>
                            <li>
                                .7 lb.
                            </li>
                        </ul>

                    </div>
                    <div>
                        <h3 className="flex">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.11111 13.5239H19.5556V19H5.11111V13.5239ZM4 9.95251H20.6667V13.5239H4V9.95251Z" stroke="#393939" />
                                <path d="M12.3334 9.72314V18.7707" stroke="#393939" stroke-width="2" />
                                <path d="M17.7278 4.35491C16.9745 3.57992 15.2367 4.11801 13.8412 5.55966C13.5812 5.83018 13.3446 6.12544 13.1345 6.4418C12.2989 7.66798 12.0701 8.95011 12.6745 9.57391C13.4256 10.3513 15.1678 9.8132 16.5612 8.37273C16.7567 8.17154 16.9301 7.96202 17.0889 7.7525C18.0734 6.45013 18.3745 5.02514 17.7278 4.35491V4.35491ZM6.93894 4.35491C7.69005 3.57872 9.43227 4.11801 10.8267 5.55966C11.1001 5.84299 11.3312 6.14061 11.5356 6.4418C12.3689 7.66798 12.5978 8.95011 11.9923 9.57391C11.2412 10.3513 9.50116 9.8132 8.10338 8.37273C7.91762 8.17693 7.74252 7.96984 7.57894 7.7525C6.59227 6.45013 6.29116 5.02514 6.93894 4.35491Z" stroke="#393939" />
                            </svg>

                            GIFT Options

                        </h3>
                        <p>Choose your gift options at Checkout. Some items may not be eligible for all gift options.</p>
                    </div>

                    <div>
                        <h3>Details & Care</h3>
                        <p>Scandinavian design has long been known for offering practical, functional pieces that are beautiful to behold but that are meant to be used. Originally designed in the '70s for Swedish schoolchildren, a now-iconic backpack is crafted from durable, water-resistant Vinylon F™ fabric and features a stylish, contemporary silhouette.</p>
                        <ul>
                            <li>14"H x 10 1/2"W x 4"D. (Interior capacity: medium.)
                            </li>
                            <li>Two-way zip-around closure with rain flap
                            </li>
                            <li>Snap-together top carry handles; adjustable backpack straps
                            </li>
                            <li>Exterior zip and slip pockets
                            </li>
                            <li>Fits most 13" laptops
                            </li>
                            <li>Foam insert for cushioning and shape is removable and can be used as an on-the-go seat pad
                            </li>
                            <li>Vinylon F with Fluorocarbon-free impregnation for water resistance
                            </li>
                            <li>Vinylon</li>
                            <li>Imported</li>
                            <li>Item #822824</li>
                        </ul>

                    </div>

                    <div className="del-div">
                        <div >
                            <h4>Free Pickup</h4>
                            <p className="flex">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.143 13.3569H0.857C0.762318 13.3569 0.671513 13.3193 0.604563 13.2524C0.537612 13.1854 0.5 13.0946 0.5 12.9999V2.99994C0.5 2.80294 0.66 2.64294 0.857 2.64294H15.143C15.34 2.64294 15.5 2.80294 15.5 2.99994V12.9999C15.5 13.1969 15.34 13.3569 15.143 13.3569V13.3569Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                    <path d="M3 10.5H7.5M3 5.5H13H3ZM3 8H13H3Z" stroke="#393939" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Printed gift message(free)
                            </p>


                            <p className="flex">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3775 14.5467H5.45583C5.4092 14.5467 5.36447 14.5282 5.3315 14.4952C5.29852 14.4622 5.28 14.4175 5.28 14.3709V5.18169C5.28 5.08503 5.35833 5.00586 5.45583 5.00586H15.3767C15.4733 5.00586 15.5525 5.08419 15.5525 5.18169V14.3709C15.5526 14.3939 15.5482 14.4168 15.5394 14.4381C15.5307 14.4594 15.5178 14.4788 15.5015 14.4951C15.4853 14.5115 15.4659 14.5244 15.4447 14.5333C15.4234 14.5421 15.4006 14.5467 15.3775 14.5467V14.5467Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                    <path d="M2.5 8.55H7.485L10.2675 5H5.2825L2.5 8.55ZM18.3333 8.55H13.3483L10.5658 5H15.5508L18.3333 8.55ZM10.4167 14.5783V5V14.5783Z" fill="white" />
                                    <path d="M10.4167 14.5783V5M2.5 8.55H7.485L10.2675 5H5.2825L2.5 8.55ZM18.3333 8.55H13.3483L10.5658 5H15.5508L18.3333 8.55Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                </svg>
                                DIY Nordstrom Gift box(free)
                            </p>
                        </div>

                        <div>
                            <h4> Delivery</h4>
                            <p className="flex">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3746 11.1846L10.1906 5.99998M15.3013 11.476H0.698646C0.65067 11.476 0.603164 11.4665 0.558839 11.4482C0.514515 11.4298 0.474241 11.4029 0.440317 11.369C0.406392 11.3351 0.379482 11.2948 0.361122 11.2505C0.342763 11.2061 0.333313 11.1586 0.333313 11.1106V0.888649C0.333313 0.687316 0.496646 0.523315 0.698646 0.523315H15.302C15.5033 0.523315 15.6673 0.686649 15.6673 0.888649V11.1106C15.6671 11.2076 15.6285 11.3005 15.5599 11.369C15.4913 11.4375 15.3983 11.476 15.3013 11.476V11.476ZM0.645313 11.1646L5.80931 5.99998L0.645313 11.1646Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                </svg>
                                Email gift message(free)
                            </p>

                            <p className="flex">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.143 13.357H0.857C0.762318 13.357 0.671513 13.3194 0.604563 13.2524C0.537612 13.1855 0.5 13.0947 0.5 13V3.00001C0.5 2.80301 0.66 2.64301 0.857 2.64301H15.143C15.34 2.64301 15.5 2.80301 15.5 3.00001V13C15.5 13.197 15.34 13.357 15.143 13.357V13.357Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                    <path d="M3 10.5H7.5M3 5.5H13H3ZM3 8H13H3Z" stroke="#393939" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                Printed gift message(free)
                            </p>
                            <p className="flex">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3775 14.5467H5.45583C5.4092 14.5467 5.36447 14.5282 5.3315 14.4952C5.29852 14.4622 5.28 14.4175 5.28 14.3709V5.18169C5.28 5.08503 5.35833 5.00586 5.45583 5.00586H15.3767C15.4733 5.00586 15.5525 5.08419 15.5525 5.18169V14.3709C15.5526 14.3939 15.5482 14.4168 15.5394 14.4381C15.5307 14.4594 15.5178 14.4788 15.5015 14.4951C15.4853 14.5115 15.4659 14.5244 15.4447 14.5333C15.4234 14.5421 15.4006 14.5467 15.3775 14.5467V14.5467Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                    <path d="M2.5 8.55H7.485L10.2675 5H5.2825L2.5 8.55ZM18.3333 8.55H13.3483L10.5658 5H15.5508L18.3333 8.55ZM10.4167 14.5783V5V14.5783Z" fill="white" />
                                    <path d="M10.4167 14.5783V5M2.5 8.55H7.485L10.2675 5H5.2825L2.5 8.55ZM18.3333 8.55H13.3483L10.5658 5H15.5508L18.3333 8.55Z" stroke="#393939" stroke-miterlimit="10" stroke-linejoin="round" />
                                </svg>

                                DIY Nordstrom Gift box($3)
                            </p>

                        </div>
                        <h4>Looking for gifts for everyone on your list? We,ve got you covered.</h4>

                        <button id="shop-gifts">
                            Shop Gifts
                        </button>

                    </div>
                </div>

                <div className="right-specs">

                </div>

            </Specification>

            <div className="horizontal-line">{/* horizontal line */}</div>



            <Question>
                <h4>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_307_15735)">
                            <path d="M18 9.5H21.5C22.0304 9.5 22.5391 9.71071 22.9142 10.0858C23.2893 10.4609 23.5 10.9696 23.5 11.5V16.5C23.5 17.0304 23.2893 17.5391 22.9142 17.9142C22.5391 18.2893 22.0304 18.5 21.5 18.5H20.5V23.5L16.5 18.5H13.5C12.9696 18.5 12.4609 18.2893 12.0858 17.9142C11.7107 17.5391 11.5 17.0304 11.5 16.5V13" stroke="black" />
                            <path d="M15.5 12.5C16.6 12.5 17.5 11.6 17.5 10.5V2.5C17.5 1.96957 17.2893 1.46086 16.9142 1.08579C16.5391 0.710714 16.0304 0.5 15.5 0.5H2.5C1.96957 0.5 1.46086 0.710714 1.08579 1.08579C0.710714 1.46086 0.5 1.96957 0.5 2.5V10.5C0.5 11.6 1.4 12.5 2.5 12.5H3.5V19.5L9 12.5H15.5Z" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_307_15735">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    HAVE QUESTIONS?
                </h4>

                <p>Connect with us to get free style advice, product recommendations or customer service help.</p>

                <button className="chat-now-btn">
                    Chat Now
                </button>


            </Question>

            <div className="horizontal-line">{/* horizontal line */}</div>

            <Reviews />






        </>
    );
};
