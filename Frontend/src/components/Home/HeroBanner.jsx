import firsthero from "../images/home/firsthero.png";
import happyhanu from "../images/home/happyhanu.png";
import dotline from "../images/home/dotline.png";
import "../../styles/herobanner.scss";

export const HeroBanner = () => {
    return (
        <>
            <div className="hero-banner">
                <img src={firsthero} alt="heroimage" />
                <img src={happyhanu} alt="heroimage" />
                <img src={dotline} alt="heroimage" />
            </div>
        </>
    )
}