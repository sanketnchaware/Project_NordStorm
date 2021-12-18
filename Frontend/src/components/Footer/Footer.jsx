import "../../styles/footer.scss";
import india from "../images/home/india.png";
import mobile from "../images/home/mobile.png";
import socialmedia from "../images/home/socialmedia.png";
import top from "../images/home/top.png";
export const Footer = () => {
    return (
        <>
            <div className="footer-parent">
                <div className="footer-child-1">
                    <p>Customer Service</p>
                    <div>Contact Us</div>
                    <div>Order Status</div>
                    <div>Shipping</div>
                    <div>Return Policy & Exchanges</div>
                    <div>Price Adjustments</div>
                    <div>Gift Cards</div>
                    <div>FAQ</div>
                    <div>Product Recalls</div>
                    <div>
                        <img src={india} alt="india flag" />
                        <span>India</span>
                    </div>
                </div>
                <div className="footer-child-2">
                    <p>About Us</p>
                    <div>Carrers</div>
                    <div>Corporate Social Responsibility</div>
                    <div>Diversity, Inclusion & Belonging</div>
                    <div>Investor Relations</div>
                    <div>Press Releases</div>
                    <div>Get Email Updates</div>
                    <div>Nordstrom Blog</div>
                </div>
                <div className="footer-child-3">
                    <p>Stores & Services</p>
                    <div>Find a Store</div>
                    <div>Free Style Help</div>
                    <div>Alterations & Tailoring</div>
                    <div>Trunk Club</div>
                    <div>Pop-In Shop</div>
                    <div>Spa Nordstrom</div>
                    <div>Nordstrom Restaurants</div>
                    <div>Nordstrom Local</div>
                </div>
                <div className="footer-child-4">
                    <p>Nordstrom Card & Rewards</p>
                    <div>The Nordy Club Rewards</div>
                    <div>Pay My Bill</div>
                    <div>Manage My Nordstrom Card</div>
                </div>
                <div className="footer-child-5">
                    <p>Nordstrom, Inc.</p>
                    <div>Nordstrom Rack</div>
                    <div>Nordstrom Canada</div>
                    <div>Trunk Club</div>
                </div>
                <div className="footer-child-6">
                    <p> <span> <img src={mobile} alt="" /></span> Get our apps</p>
                    <div>
                        <img src={socialmedia} alt="" />

                    </div>
                </div>
                <div className="footer-child-7">
                   <a href="#top"><img src={top} alt="" /></a> 
                </div>
            </div>
            <div className="footer-legal">
                <p>Your Privacy Rights</p>
                <p>Do Not Sell My Info</p>
                <p>Terms & Conditions</p>
                <p>Interest-Based Ads</p>
                <p>© 2021 Nordstrom, Inc.</p>
            </div>
        </>
    )
}