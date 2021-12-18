import "../../styles/signup.scss";
import { Footer } from "../Footer/Footer"
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import signup from "../images/signup/signup.png";
import { Navbar } from "../Navbar/Navbar";

export const SignupFlow2 = () => {
    const history = useHistory();
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        password: ""
    });
    const [spin, setSpin] = useState(true);

    let result = localStorage.getItem('email');
    result = JSON.parse(result);

    let { firstname, lastname, password } = input
    const handleChange = (e) => {
        let { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })

    }

    const handleNextSignup = () => {
        localStorage.setItem("firstname", JSON.stringify(firstname));
        setSpin(false);
        setTimeout(() => {
            history.push("/signup3")
        }, 5000)
    }
    return (
        <>
            <Navbar />
            <div className="signup-parent">
                <h5>Create Account</h5>
                <p><img src={signup} alt="" /></p>
                <h6>Email</h6>
                <p>{result} <Link to="/signup" style={{ color: "inherit", marginLeft: "55%" }}>Edit</Link> </p>
                <h6>First name <span>*</span></h6>
                <input type="text" onChange={handleChange} name="firstname" />
                <h6>Last name <span>*</span></h6>
                <input type="text" onChange={handleChange} name="lastname" />
                <h6>Create password <span>*</span></h6>
                <input type="password" onChange={handleChange} name="password" />

                <div>By tapping Next, you agree to our <span>Privacy policy</span> and <span>Terms & Conditions.</span></div>
                <button onClick={handleNextSignup} style={{ textDecoration: "none" }}>
                    {spin ? "Create Account" : <CircularProgress color="inherit" />}
                </button>

            </div>
            <Footer />
        </>
    )
}