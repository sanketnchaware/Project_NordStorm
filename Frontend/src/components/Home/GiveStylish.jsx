import "../../styles/givestylish.scss";
import givestylist from "../images/home/givestylist.png";

export const GiveStylish = () => {
    return (
        <>
        <div className="givestylish-parent">
            <img src={givestylist} alt="givestylist" />
            <div>
                <h5>Give Stylish Comfort</h5>
                <p>Trust them to winning cold-weather picks from rag & bone.</p>
                <span>rag & bone</span>
            </div>
        </div>
        </>
    )
}