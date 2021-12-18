import "../../styles/bestgift.scss";
import lastminute from "../images/home/lastminute.png";

export const BestGift = () => {
    return (
        <>
            <div className="bestgift-parent">
                <h5>THE BEST GIFTS FOR EVERYONE ON YOUR LIST</h5>
                <div>
                    <img src={lastminute} alt="lastminute" />
                    <div>
                        <h3>Last-Minute Gifts</h3>
                        <p>From the best brands of the season.</p>
                        <span>Gift Guide</span>
                    </div>
                </div>
            </div>
        </>
    )
}