import makemerry from "../images/home/makemerry.png";
import "../../styles/makemerry.scss";

export const MakeMerry = () => {
    return (
        <>
            <div className="parent-merry">
                <img src={makemerry} alt="makemerry" />
                <div className="merry-list">
                    <p>We’re celebrating with new inspiration every week for festive decor, the best gifts and more.</p>
                    <div className="merry-gift">
                        <p>Gift Guide</p>
                        <p>Gift For Her</p>
                        <p>Gift For Him</p>
                        <p>Gift For Kids</p>
                        <p>Festive Experiences</p>
                        <p>Gift Cards</p>
                    </div>
                </div>
            </div>
        </>
    )
}