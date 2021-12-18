import mostdelicios from "../images/home/mostdelicios.png";
import dotline from "../images/home/dotline.png";
import "../../styles/mostdelicios.scss";

export const MostDelicious = () => {
    return (
        <>
            <div className="most-delicious-parent">
                <img src={mostdelicios} alt="mostdelicios" />
                <div>
                    <h5>The Most Delicious Time of Year</h5>
                    <p>Join us for The Holiday Breakfast, Merry Slips & Bites, our restaurant week and more.</p>
                <span>Explore Events & RSVP</span> <span>Find Your Nearest Store</span>
                </div>
            </div>

            <div className="dotline-most">
                <img src={dotline} alt="dotline" />
            </div>

            <div className="holiday-heading">HOLIDAY SHOPS</div>
        </>
    )
}