import dogcap from "../images/home/dogcap.png";
import makediffer from "../images/home/makediffer.gif";
import clothbagetc from "../images/home/clothbagetc.png";
import givegift from "../images/home/givegift.png";
import curate from "../images/home/curate.png";
import "../../styles/makedifference.scss";

export const MakeDifference = () => {
    return (
        <>
            <div className="difference-parent">
                <div className="difference-child-1">
                    <img src={dogcap} alt="dagcap man" />

                    <div>
                        <img src={makediffer} alt="" />
                        <div className="difference-sibling-1">
                            Discover brands doing great things for people and the planet.
                            <div className="difference-sibling-2">
                                <p>Our Picks</p>
                                <p>Sustainable Style</p>
                                <p>Sustainable Beauty</p>
                                <p>Operation Warm</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={clothbagetc} alt="" />
                    </div>
                    <div className="givegift">
                        <img src={givegift} alt="givegift" />
                        <p>Shop Now</p>
                    </div>
                </div>

                <div className="difference-child-2">
                    <div>
                        <iframe width="380" height="780" src="https://www.youtube.com/embed/mzNqvg3TCiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="curate">
                        <img src={curate} alt="curate" />
                        <p>Shop Now</p>
                    </div>
                </div>
            </div>
        </>
    )
}