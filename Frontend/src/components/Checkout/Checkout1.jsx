import "../../styles/checkout.scss";
import lock from "../images/checkout/lock.png";
import arrow from "../images/checkout/arrow.png";
import cart from "../images/checkout/cart.png";
import { Link } from "react-router-dom";

export const Checkout1 = () => {
    return (
        <>
            <div className="head-nord">
                <p>NORDSTROM</p>
            </div>

            <div className="checkout-1-parent">
                <div className="checkout-1-child-1">

                    <div className="secure-checkout">
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
                    <div className="hr-line"></div>

                    <div><div>1</div>Delivery</div>
                    {/* nth child 5 */}
                    <div><input type="text" placeholder="Email"/></div>

                    <div>
                        <input type="text" placeholder="First Name"/> <input type="text" placeholder="Last Name"/>
                    </div>

                    <div><input type="text" placeholder="Address"/></div>

                    <div>
                        <input type="text" placeholder="Address2(optional)"/> <input type="text" placeholder="Postal Code"/>
                    </div>

                    <div>
                        <input type="text" placeholder="City"/> <input type="text" placeholder="Region(optional)"/>
                    </div>

                    <div>
                        <input type="text" placeholder="Phone"/> <input type="text" placeholder="Location"/>
                    </div>

                    <div>
                        <div>Delivery Method</div>
                        <div>Estimated Arrival</div>
                        <div>Shipping Cost</div>
                    </div>

                    <div>
                        <div className="shipping-calculate">
                            <div><input type="checkbox" /></div>
                            <div><div> Standard  </div>No additional import charges at delivery</div>
                            <div>11-21 business days</div>
                            <div>(INR) ₹2,537</div>
                        </div>
                        <div className="shipping-calculate">
                        <div><input type="checkbox" /></div>
                            <div> <div> Standard  </div>
                                Import charges collected upon delivery
                            </div>
                            <div>11-21 business days</div>
                            <div>Calculate</div>
                        </div>
                        <div className="shipping-calculate">
                        <div><input type="checkbox" /></div>
                            <div> <div> Express </div>
                                No additional import charges at delivery
                            </div>

                            <div>6-11 business days</div>
                            <div>Calculate</div>
                        </div>
                        <div className="shipping-calculate">
                        <div><input type="checkbox" /></div>
                            <div><div> Express </div>
                                Import charges collected upon delivery</div>
                            <div>6-11 business days</div>
                            <div>Calculate</div>
                        </div>
                    </div>

                    <div className="continue-btn">
                        <button>Continue <img src={arrow} alt="" /></button>
                    </div>

                    <div className="hr-line"></div>


                    <div> <div>2</div>
                        Payment</div>
                    <div className="hr-line"></div>
                    <div>By placing your order, you agree to the Terms & Conditions and Privacy Policy of Borderfree from Pitney Bowes, Nordstrom’s international fulfillment service. Borderfree is an online merchant that is located at Shelton, US, 06484, 27 Waterview Drive, CT.</div>
                </div>

                <div className="checkout-1-child-2">

                    <div><img src={cart} alt="" />Your Order</div>

                    <div className="continue-btn">
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
                    <div className="hr-line"></div>
                    <p>+ Promo Code</p>
                    <div className="hr-line"></div>
                </div>
            </div>
        </>
    )
}