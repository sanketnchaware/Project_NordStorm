import "../../styles/greatdeal.scss";
import { product } from "./product";
import star from "../images/product/star.png";

export const GreatDeals = () => {
    return (
        <>
            <div className="greatdeal-parent">
                {
                    product.map(({ productName, imageURL, price }) => {
                        return (
                            <>
                                <div className="greatdeal-child">
                                    <div><img src={imageURL} alt="" /></div>
                                    <div>Popular</div>
                                    <div className="greatdeal-color">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div>Arrives before Christmas</div>
                                    <div>Nordstrom</div>
                                    <div>{productName}</div>
                                    <div className="greatdeal-price">
                                        <h6>INR {price}</h6>
                                        <p> INR 8545.77</p>
                                        <span>32% off</span>

                                    </div>
                                    <div>
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                            </>
                        )
                    })}

            </div>


        </>
    )
}
