import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer"
import "../../styles/success.scss"
export const Success = () => {
    return (
        <>
            <Navbar />
            <div className="success-parent">
                <img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/successgif.gif" alt="" />

                <div>
                <p>Your order has successfully placed , you can enjoy more products</p>
                    <button>Shop More</button>
                </div>
            </div>
            <Footer />
        </>
    )
}