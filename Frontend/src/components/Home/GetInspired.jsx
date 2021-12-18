import "../../styles/getinspire.scss"

export const GetInspired = ({ image, name, des, category1, category2, category3, category4 }) => {
    return (
        <>
            <div className="getinspire-parent">
                <img src={image} alt="name" />
                <div className="font-inspire">{name}</div>
                <div>{des}</div>
                <div className="getinspire-child">
                    <p>{category1}</p>
                    <p>{category2}</p>
                    <p>{category3}</p>
                    <p>{category4}</p>
                </div>
            </div>
        </>
    )
}