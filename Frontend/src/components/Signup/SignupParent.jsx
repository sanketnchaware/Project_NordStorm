import { Signup } from "./Signup"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
export const SignupParent = () => {
    return (
        <>
            <Navbar />
            <Signup />
            <Footer />
        </>
    )
}