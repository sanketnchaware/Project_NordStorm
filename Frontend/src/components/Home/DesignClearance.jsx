import designclear from "../images/home/designclear.png";
import dotline from "../images/home/dotline.png";
import "../../styles/designclear.scss"
export const DesignClearance = () => {
    return (
        <>
            <div className="design-parent">
                <img src={designclear} alt="" />
                <p>
                    From the best brands of the season. <span>Designer Sale</span>
                </p>

                <div>
                    <img src={dotline} alt="dotline" />
                </div>
            </div>

        </>
    )
}