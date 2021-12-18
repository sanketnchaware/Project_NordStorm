import "../../styles/tidethings.scss"
import tiddingthings from "../images/home/tiddingthings.png";

export const TidingOfJoy = () => {
    return (
        <>
            <div className="tidethings-parent">
                <img src={tiddingthings} alt="tiddingthings" />
                <div className="tidethings-child">
                    <h5>Tidings of Joy Delivered to Your Inbox</h5>
                    <p>Sign up for our email updates about holiday events and sales. </p>
                    <span>Get Email Updates</span>
                </div>
            </div>
        </>
    )
}