import "../../styles/checkout2.scss";
import lock from "../images/checkout/lock.png";
import arrow from "../images/checkout/arrow.png";
import cart from "../images/checkout/cart.png";
import card from "../images/checkout/card.png";
import { Link } from "react-router-dom";
import cloudfare from "../images/checkout/cloudfare.png";

export const Checkout2 = () => {
    return (
        <>
            <div className="head-nord">
                <p>NORDSTROM</p>
            </div>

            <div className="checkout-2-parent">
                <div className="checkout-2-child-2">

                    <div className="secure-checkout-2">

                        <div><img src={lock} alt="" /> Secure Checkout</div>
                        <div>Powered by Borderfree</div>

                        <div>
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Hindi</option>
                            </select>
                        </div>

                    </div>

                    <div>Already have a Borderfree account?<Link>Click here.</Link> </div>

                    <div className="hr-line-2"></div>

                    <div><div>1</div>Delivery <span><Link to="/check1">(Change)</Link></span> </div>

                    <div>
                        <div>
                            <div>DELIVERY ADDRESS:</div>
                            <p>MAHANTI KESHAV
                                FLAT NO 310, SREENIDHI TOWERS, KALY
                                GODAVARIKHANI, TELANGANA 505209
                                INDIA</p>
                        </div>

                        <div>
                            <div>DELIVERY METHOD:</div>
                            <p>STANDARD
                                NO ADDITIONAL IMPORT CHARGES AT
                                DELIVERY
                                11-21 BUSINESS DAYS</p>
                        </div>
                    </div>


                    <div> <div>2</div>Payment <span><img src={cloudfare} alt="" /> </span></div>

                    <div>
                        <input type="checkbox" name="" id="" /> <span>My billing address is the same as my delivery address</span>
                    </div>

                    <div>
                        <input type="radio" />Credit or Debit Card <img src={card} alt="" />
                    </div>

                    <div><input type="text" placeholder="Card Number" autocomplete="off"/></div>
                    <div><input type="text" placeholder="MM / YY" /><input type="text" placeholder="Security Code" /></div>

                    <div className="hr-line-2"></div>

                    <div>
                        <div><input type="checkbox" /></div>
                        <div>Send me electronic or mail offers from Borderfree. You may opt out at any time.</div>
                    </div>

                    <div className="continue-btn-2">
                        <button>Place Order <img src={arrow} alt="" /></button>
                    </div>

                    <div>This order total is 100% guaranteed. There will be no additional charges due upon receipt.</div>

                    <div className="hr-line-2"></div>

                    <div>By placing your order, you agree to the Terms & Conditions and Privacy Policy of Borderfree from Pitney Bowes, Nordstrom’s international fulfillment service. Borderfree is an online merchant that is located at Shelton, US, 06484, 27 Waterview Drive, CT.</div>
                </div>

                <div className="checkout-2-child-3">

                    <div><img src={cart} alt="" />Your Order</div>

                    <div className="continue-btn-2">
                        <button>Continue <img src={arrow} alt="" /></button>
                    </div>

                    <div>
                        <p>Items</p>
                        <div>₹6,505</div>
                    </div>

                    <div>
                        <p>Shipping</p>
                        <div>₹2,537</div>
                    </div>

                    <div>
                        <p>Duties & Taxes</p>
                        <div>₹3,805</div>
                    </div>

                    <div>
                        <p>TOTAL</p>
                        <div>(INR)₹12,847</div>
                    </div>
                    <div className="hr-line-2"></div>
                    <p>+ Promo Code</p>
                    <div className="hr-line-2"></div>
                </div>
            </div>
        </>
    )
}