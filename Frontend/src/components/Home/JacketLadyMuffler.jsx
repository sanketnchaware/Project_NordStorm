import "../../styles/jacketladymuffler.scss";

export const JacketLadyMuffler = ({ image1, image2 }) => {
    return (
        <>
            <div className="jacketladymuffler">
                <img src={image1} alt="jacket" />
                <div className="jacketlady-child">
                    <img src={image2} alt="jacket" />
                    <p>Shop Now</p>
                </div>
            </div>
        </>
    )
}