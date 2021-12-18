import "../../styles/signup.scss";
import { Footer } from "../Footer/Footer"
import { useHistory } from "react-router-dom";
import rack from "../images/signup/rack.png"
import { Navbar } from "../Navbar/Navbar";

export const SignupFlow3 = () => {

    const history = useHistory()
    let result = localStorage.getItem('firstname');
    result = JSON.parse(result);

    const handleNextSignup = () => {
        history.push("/")

    }
    return (
        <>
            <Navbar />
            <div className="signup-parent">
                <h5>Welcome, {result}</h5>
                <img src={rack} alt="" />
                <button onClick={handleNextSignup} style={{ backgroundColor: "white", color: "black", textDecoration: "none", border: "1px solid black" }}>Shop Now</button>
            </div>
            <Footer />
        </>
    )
}