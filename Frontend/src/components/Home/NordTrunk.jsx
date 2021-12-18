import "../../styles/nordtrunk.scss";

export const NordTrunk = ({ image, name, des, category1, category2 }) => {
    return (
        <>
            <div className="nordtrunk-parent">
                <img src={image} alt={name} />
                <div className="nordtrunk-child">
                    <h5>{name}</h5>
                    <p>{des}</p>
                    <span>{category1}</span>  <span>{category2}</span>
                </div>
            </div>

           
        </>
    )

}