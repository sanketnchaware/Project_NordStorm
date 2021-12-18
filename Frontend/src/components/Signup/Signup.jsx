import "../../styles/signup.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';

export const Signup = () => {
    const history = useHistory();
    const [input, setInput] = useState("");
    const [spin, setSpin] = useState(true)

    const handleNextSignup = () => {
        localStorage.setItem("email", JSON.stringify(input));
        let result = localStorage.getItem('email');
        result = JSON.parse(result);
        setSpin(false);
        setTimeout(() => {
            history.push("/signup2")
        }, 5000)
    }


    return (
        <>
            <div className="signup-parent">
                <h5>Sign In | Create Account</h5>
                <p>Enter your email to get started.</p>
                <h6>Email</h6>
                <input type="text" onChange={(e) => { setInput(e.target.value) }} />
                <div>By tapping Next, you agree to our <span>Privacy policy</span> and <span>Terms & Conditions.</span></div>
                <button onClick={handleNextSignup}>
                    {spin?"Next": <CircularProgress color="inherit" />}
                    </button>

            </div>
        </>
    )

}