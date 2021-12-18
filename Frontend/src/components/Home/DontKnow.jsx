import "../../styles/dontknow.scss";
import dontknow from "../images/home/dontknow.png";
import dotline from "../images/home/dotline.png";

export const DontKnow = () => {
    return (
        <>
            <div className="dontknow-parent">
                <img src={dontknow} alt="dontknow" />
                <div className="dontknow-child">
                    <h5>Don’t Know What to Get? We Do!</h5>
                    <p>Get free gift advice from our experts in stores and online, or give the gift they pick with a Nordstrom Gift Card. Plus, get free gift wrapping and free signature gift boxes in stores.</p>
                    <div>
                        <p>Book a Free Appointment</p>
                        <p>Chat with a Stylist</p>
                        <p>Gift Cards</p>
                        <p>Gift Wraps</p>
                    </div>

                </div>

            </div>
            <div className="dotline">
                <img src={dotline} alt="dotline" />
            </div>

            <div className="inspired-get">GET INSPIRED</div>
        </>
    )
}