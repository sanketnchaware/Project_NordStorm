import bonusnote from "../images/home/bonusnote.png";
import "../../styles/bonusnote.scss";

export const BonusNote = () => {
    return (
        <>
            <div className="bonusnote-parent">
                <img src={bonusnote} alt="bonusNote" />
                <div className="bonusnote-child">
                    An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.
                    <p>Apply Now</p>
                </div>
            </div>
        </>
    )
}