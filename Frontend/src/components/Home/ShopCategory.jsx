import "../../styles/shopcategory.scss";

export const ShopCategory = ({ image, name }) => {
    return (
        <>
            <div className="shopcategory-parent">
                <img src={image} alt={name} />
                <div className="shopcategory-child">
                    {name}
                </div>
            </div>
        </>
    )
}