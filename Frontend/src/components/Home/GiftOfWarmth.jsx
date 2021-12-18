import soothe from "../images/home/soothe.png";
import healthyplanet from "../images/home/healthyplanet.png";
import boygirl from "../images/home/boygirl.png";
import giftofwarmth from "../images/home/giftofwarmth.png";
import "../../styles/giftofwarmth.scss";

export const GiftOfWarmth = () => {
    return (
        <>
            <div className="giftwarmth-parent">
                <div className="giftwarmth-child-1">
                    <div>
                        <img src={soothe} alt="" />
                    </div>
                    <div>
                        <img src={healthyplanet} alt="" />
                        <p>Shop Now</p>
                    </div>
                </div>

                <div className="giftwarmth-child-2">
                        <img src={boygirl} alt="" />
                    <div>
                        <img src={giftofwarmth} alt="" />
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
        </>
    )

}