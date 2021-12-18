import "../../styles/navbar.scss";
import india from "../images/home/india.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
    let result = localStorage.getItem('firstname');
    result = JSON.parse(result);
    return (
        <div >
            <div className="black-navbar">
              <div> Shipping outside of the  U.S. or Canada? <span> Learn About International Shipping</span></div>
              <div><img src={india} alt="" /> India</div>
            </div>
            {/*Top Navbar  */}
            <div className="top-navbar" id="top">
                <h1>NORDSTORM</h1>
                <div className="top-navbar nav-right-part" >
                    <div className="search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8215 16.5781L16.58 14.8205L22 20.2435L20.2414 22.0011L14.8215 16.5781Z" stroke="black" />
                            <path d="M15.334 15.3338L14.3083 14.3081" stroke="black" />
                            <path d="M9.17987 16.3597C13.1452 16.3597 16.3597 13.1452 16.3597 9.17987C16.3597 5.21454 13.1452 2 9.17987 2C5.21454 2 2 5.21454 2 9.17987C2 13.1452 5.21454 16.3597 9.17987 16.3597Z" stroke="black" />
                        </svg>

                        <p>Search</p>
                    </div>
                    <Link to="/signup" className="signup-link">{result!==""?<p>Hii, {result}</p>:"Sign In"} </Link>
                  <Link to="/cart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 8.97662C22 8.72991 21.9084 8.4933 21.7453 8.31885C21.5822 8.14439 21.3611 8.04639 21.1304 8.04639H2.86957C2.63894 8.04639 2.41776 8.14439 2.25469 8.31885C2.09161 8.4933 2 8.72991 2 8.97662V21.0696C2 21.3164 2.09161 21.553 2.25469 21.7274C2.41776 21.9019 2.63894 21.9999 2.86957 21.9999H21.1304C21.3611 21.9999 21.5822 21.9019 21.7453 21.7274C21.9084 21.553 22 21.3164 22 21.0696V8.97662Z" stroke="black" />
                        <path d="M6.78259 7.5814C6.78259 6.10112 7.33228 4.68147 8.31073 3.63475C9.28918 2.58804 10.6162 2 12 2C13.3837 2 14.7108 2.58804 15.6892 3.63475C16.6677 4.68147 17.2174 6.10112 17.2174 7.5814" stroke="black" />
                    </svg>
                    </Link>
                </div>
            </div>

            {/* Second Navbar */}

            <div className="second-navbar" >
                <div className="gift-logo" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.11111 13.524H19.5556V19.0002H5.11111V13.524ZM4 9.95264H20.6667V13.524H4V9.95264Z" stroke="#D61F27" />
                        <path d="M12.3334 9.72314V18.7707" stroke="#D61F27" stroke-width="2" />
                        <path d="M17.7278 4.35491C16.9745 3.57992 15.2367 4.11801 13.8411 5.55966C13.5811 5.83018 13.3446 6.12544 13.1345 6.4418C12.2989 7.66798 12.07 8.95011 12.6745 9.57391C13.4256 10.3513 15.1678 9.8132 16.5611 8.37273C16.7567 8.17154 16.93 7.96202 17.0889 7.7525C18.0734 6.45013 18.3745 5.02514 17.7278 4.35491V4.35491ZM6.93891 4.35491C7.69002 3.57872 9.43224 4.11801 10.8267 5.55966C11.1 5.84299 11.3311 6.14061 11.5356 6.4418C12.3689 7.66798 12.5978 8.95011 11.9922 9.57391C11.2411 10.3513 9.50113 9.8132 8.10335 8.37273C7.91759 8.17693 7.74249 7.96984 7.57891 7.7525C6.59224 6.45013 6.29113 5.02514 6.93891 4.35491Z" stroke="#D61F27" />
                    </svg>
                    <p> Holiday Gifts</p>
                </div>

                <p>Women</p>
                <p>Men</p>
                <p>Kids</p>
                <p>Young Adults</p>
                <p>Activewear</p>
                <p>Home</p>
                <p>Beauty</p>
                <p>Designer </p>
                <p>Sale</p>
                <p>Brands</p>
            </div>
        </div>
    )
}
