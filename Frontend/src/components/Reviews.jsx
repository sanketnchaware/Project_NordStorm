import React from 'react'
import "../style.css"
import styled from "styled-components"
import CustoImage1 from "../utils/Images/CustoImage (1).png"
import CustoImage2 from "../utils/Images/CustoImage (2).png"
import CustoImage3 from "../utils/Images/CustoImage (3).png"
import CustoImage4 from "../utils/Images/CustoImage (4).png"
import CustoImage5 from "../utils/Images/CustoImage (5).png"
import CustoImage6 from "../utils/Images/CustoImage (6).png"
import CustoImage7 from "../utils/Images/CustoImage (7).png"
import CustoImage8 from "../utils/Images/CustoImage (8).png"

const Review = styled.div`
    margin: 0 1rem;
    display:flex;
    flex-direction: row;
    justify-content: space-around;

`
const CustomerPhotos = styled.div`
    display:flex;
    flex-direction: row;
    margin: 1rem;
    img{
        margin-right: 1rem;
    }
`

const Feedback = styled.div`
    margin:2rem 1rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    
    

    div:nth-child(2){
        margin-right:30%;
        width:40%;
    }
`

export const Reviews = () => {
    return (<>
        <Review>
            <div className="rating" >
                <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.2699L18.18 20.9999L16.54 13.9699L22 9.23991L14.81 8.62991L12 1.99991L9.19 8.62991L2 9.23991L7.46 13.9699L5.82 20.9999L12 17.2699Z" fill="#393939" />
                    <path d="M36.0001 17.2699L42.1801 20.9999L40.5401 13.9699L46.0001 9.23991L38.8101 8.62991L36.0001 1.99991L33.1901 8.62991L26.0001 9.23991L31.4601 13.9699L29.8201 20.9999L36.0001 17.2699Z" fill="#393939" />
                    <path d="M59.9999 17.2699L66.1799 20.9999L64.5399 13.9699L69.9999 9.23991L62.8099 8.62991L59.9999 1.99991L57.1899 8.62991L49.9999 9.23991L55.4599 13.9699L53.8199 20.9999L59.9999 17.2699Z" fill="#393939" />
                    <path d="M83.9999 17.2699L90.1799 20.9999L88.5399 13.9699L93.9999 9.23991L86.8099 8.62991L83.9999 1.99991L81.1899 8.62991L73.9999 9.23991L79.4599 13.9699L77.8199 20.9999L83.9999 17.2699Z" fill="#393939" />
                    <path d="M118 9.23991L110.81 8.61991L108 1.99991L105.19 8.62991L98.0001 9.23991L103.46 13.9699L101.82 20.9999L108 17.2699L114.18 20.9999L112.55 13.9699L118 9.23991ZM108 15.3999V6.09991L109.71 10.1399L114.09 10.5199L110.77 13.3999L111.77 17.6799L108 15.3999Z" fill="#393939" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108 17.2699V15.3999V6.09991V1.99991L110.81 8.62991L118 9.23991L112.54 13.9699L114.18 20.9999L108 17.2699Z" fill="#E3E3E3" />
                </svg>
                <p>4.5 out of 5</p>

            </div>

            <div className="rating-bars">
                <div >
                    <p>5 Stars</p>
                    <p>4 Stars</p>
                    <p>3 Stars</p>
                    <p>2 Stars</p>
                    <p>1 Stars</p>
                </div>
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="16" fill="#E3E3E3" />
                    <rect width="146" height="16" fill="#393939" />
                    <rect y="26" width="200" height="16" fill="#E3E3E3" />
                    <rect y="26" width="32" height="16" fill="#393939" />
                    <rect y="52" width="200" height="16" fill="#E3E3E3" />
                    <rect y="52" width="10" height="16" fill="#393939" />
                    <rect y="78" width="200" height="16" fill="#E3E3E3" />
                    <rect y="78" width="6" height="16" fill="#393939" />
                    <rect y="104" width="200" height="16" fill="#E3E3E3" />
                    <rect y="104" width="6" height="16" fill="#393939" />
                </svg>
                <div >
                    <p>73%</p>
                    <p>16%</p>
                    <p>5%</p>
                    <p>3%</p>
                    <p>3%</p>
                </div>
            </div>


            <div >
                <button className="write-review-btn" >
                    Write a Review
                </button>
            </div>
        </Review>

        <div className="horizontal-line">{/* horizontal line */}</div>

        <div className="customer-photos" >
            <h4>Customer photos</h4>
            <CustomerPhotos>
                <img src={CustoImage1} alt="" />
                <img src={CustoImage2} alt="" />
                {/* <img src={CustoImage3} alt="" /> */}
                <img src={CustoImage4} alt="" />
                <img src={CustoImage5} alt="" />
                <img src={CustoImage6} alt="" />
                <img src={CustoImage7} alt="" />
                <img src={CustoImage8} alt="" />
            </CustomerPhotos>
        </div>

        <div className="horizontal-line">{/* horizontal line */}</div>


        <Feedback>
            <div>
                <p>anno2019</p>
            </div>
            <div>
                <svg width="118" height="24" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.2699L18.18 20.9999L16.54 13.9699L22 9.23991L14.81 8.62991L12 1.99991L9.19 8.62991L2 9.23991L7.46 13.9699L5.82 20.9999L12 17.2699Z" fill="#393939" />
                    <path d="M36.0001 17.2699L42.1801 20.9999L40.5401 13.9699L46.0001 9.23991L38.8101 8.62991L36.0001 1.99991L33.1901 8.62991L26.0001 9.23991L31.4601 13.9699L29.8201 20.9999L36.0001 17.2699Z" fill="#393939" />
                    <path d="M59.9999 17.2699L66.1799 20.9999L64.5399 13.9699L69.9999 9.23991L62.8099 8.62991L59.9999 1.99991L57.1899 8.62991L49.9999 9.23991L55.4599 13.9699L53.8199 20.9999L59.9999 17.2699Z" fill="#393939" />
                    <path d="M83.9999 17.2699L90.1799 20.9999L88.5399 13.9699L93.9999 9.23991L86.8099 8.62991L83.9999 1.99991L81.1899 8.62991L73.9999 9.23991L79.4599 13.9699L77.8199 20.9999L83.9999 17.2699Z" fill="#393939" />
                    <path d="M118 9.23991L110.81 8.61991L108 1.99991L105.19 8.62991L98.0001 9.23991L103.46 13.9699L101.82 20.9999L108 17.2699L114.18 20.9999L112.55 13.9699L118 9.23991ZM108 15.3999V6.09991L109.71 10.1399L114.09 10.5199L110.77 13.3999L111.77 17.6799L108 15.3999Z" fill="#393939" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108 17.2699V15.3999V6.09991V1.99991L110.81 8.62991L118 9.23991L112.54 13.9699L114.18 20.9999L108 17.2699Z" fill="#E3E3E3" />
                </svg>
                <h3>Great bookbag for school</h3>
                <p>
                    The fjallraven bookbag looks great! It fits two latin textbooks, one huge math text, one
                    grammer book, one literature book, a 1” binder, five folders, a calculator, some hand sanitizer
                    and lipbalm. Great bookbag for school and travel.
                </p>
                <p>Sept 12, 2020</p>
            </div>
        </Feedback>
        <div className="horizontal-line">{/* horizontal line */}</div>
        <Feedback>
            <div>
                <p>Jac19</p>
            </div>
            <div>
                <svg width="118" height="24" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.2699L18.18 20.9999L16.54 13.9699L22 9.23991L14.81 8.62991L12 1.99991L9.19 8.62991L2 9.23991L7.46 13.9699L5.82 20.9999L12 17.2699Z" fill="#393939" />
                    <path d="M36.0001 17.2699L42.1801 20.9999L40.5401 13.9699L46.0001 9.23991L38.8101 8.62991L36.0001 1.99991L33.1901 8.62991L26.0001 9.23991L31.4601 13.9699L29.8201 20.9999L36.0001 17.2699Z" fill="#393939" />
                    <path d="M59.9999 17.2699L66.1799 20.9999L64.5399 13.9699L69.9999 9.23991L62.8099 8.62991L59.9999 1.99991L57.1899 8.62991L49.9999 9.23991L55.4599 13.9699L53.8199 20.9999L59.9999 17.2699Z" fill="#393939" />
                    <path d="M83.9999 17.2699L90.1799 20.9999L88.5399 13.9699L93.9999 9.23991L86.8099 8.62991L83.9999 1.99991L81.1899 8.62991L73.9999 9.23991L79.4599 13.9699L77.8199 20.9999L83.9999 17.2699Z" fill="#393939" />
                    <path d="M118 9.23991L110.81 8.61991L108 1.99991L105.19 8.62991L98.0001 9.23991L103.46 13.9699L101.82 20.9999L108 17.2699L114.18 20.9999L112.55 13.9699L118 9.23991ZM108 15.3999V6.09991L109.71 10.1399L114.09 10.5199L110.77 13.3999L111.77 17.6799L108 15.3999Z" fill="#393939" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108 17.2699V15.3999V6.09991V1.99991L110.81 8.62991L118 9.23991L112.54 13.9699L114.18 20.9999L108 17.2699Z" fill="#E3E3E3" />
                </svg>
                <h3>Great bookbag for school</h3>
                <p>
                    The fjallraven bookbag looks great! It fits two latin textbooks, one huge math text, one
                    grammer book, one literature book, a 1” binder, five folders, a calculator, some hand sanitizer
                    and lipbalm. Great bookbag for school and travel.
                </p>
                <p>Sept 12, 2020</p>
            </div>
        </Feedback>
        <div className="horizontal-line">{/* horizontal line */}</div>
        <Feedback>
            <div>
                <p>KarinaLM</p>
            </div>
            <div>
                <svg width="118" height="24" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.2699L18.18 20.9999L16.54 13.9699L22 9.23991L14.81 8.62991L12 1.99991L9.19 8.62991L2 9.23991L7.46 13.9699L5.82 20.9999L12 17.2699Z" fill="#393939" />
                    <path d="M36.0001 17.2699L42.1801 20.9999L40.5401 13.9699L46.0001 9.23991L38.8101 8.62991L36.0001 1.99991L33.1901 8.62991L26.0001 9.23991L31.4601 13.9699L29.8201 20.9999L36.0001 17.2699Z" fill="#393939" />
                    <path d="M59.9999 17.2699L66.1799 20.9999L64.5399 13.9699L69.9999 9.23991L62.8099 8.62991L59.9999 1.99991L57.1899 8.62991L49.9999 9.23991L55.4599 13.9699L53.8199 20.9999L59.9999 17.2699Z" fill="#393939" />
                    <path d="M83.9999 17.2699L90.1799 20.9999L88.5399 13.9699L93.9999 9.23991L86.8099 8.62991L83.9999 1.99991L81.1899 8.62991L73.9999 9.23991L79.4599 13.9699L77.8199 20.9999L83.9999 17.2699Z" fill="#393939" />
                    <path d="M118 9.23991L110.81 8.61991L108 1.99991L105.19 8.62991L98.0001 9.23991L103.46 13.9699L101.82 20.9999L108 17.2699L114.18 20.9999L112.55 13.9699L118 9.23991ZM108 15.3999V6.09991L109.71 10.1399L114.09 10.5199L110.77 13.3999L111.77 17.6799L108 15.3999Z" fill="#393939" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108 17.2699V15.3999V6.09991V1.99991L110.81 8.62991L118 9.23991L112.54 13.9699L114.18 20.9999L108 17.2699Z" fill="#E3E3E3" />
                </svg>
                <h3>Great bookbag for school</h3>
                <p>
                    The fjallraven bookbag looks great! It fits two latin textbooks, one huge math text, one
                    grammer book, one literature book, a 1” binder, five folders, a calculator, some hand sanitizer
                    and lipbalm. Great bookbag for school and travel.
                </p>
                <p>Sept 12, 2020</p>
            </div>
        </Feedback>
        <div className="horizontal-line">{/* horizontal line */}</div>




    </>
    )
}
