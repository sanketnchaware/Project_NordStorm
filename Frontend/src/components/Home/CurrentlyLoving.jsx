import "../../styles/currentlyloving.scss";


export const CurrentlyLoving = ({ image1, image2, image3, image4 }) => {
    return (
        <>
            <div className="currentlyliving-parent">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
        </>
    )
}