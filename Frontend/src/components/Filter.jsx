
import React, { useState } from 'react'
import styled from "styled-components";
import axios from "axios";

export const Filter = ({ bags, handleFilter }) => {


    const [gender, setGender] = useState(true)

    const [color, setColor] = useState(true);

    const [Price, setPrice] = useState(true);

    const [Rating, setRating] = useState(true);

    const [brand, setBrand] = useState(true);

    return (
        <div className="sorting-container">


            <div>
                <button className="sorting-btn" onClick={() => {
                    if (gender) {
                        setGender(false);

                    }
                    else {
                        setGender(true);
                    }
                }}>Gender</button>

                <div className="sorting-div" style={gender ? { display: "none" } : { display: "block" }}>

                    <p onClick={() => {


                        axios.get("http://localhost:2325/sort/gender?gender=male")
                            .then((res) => {
                                handleFilter(res.data.product)
                            }).catch((err) => {
                                console.log(err)
                            })
                        // alert("Hello")

                        // handleFilter(bags.filter(bag => bag.gender === "male"))
                    }}>
                        Male</p>
                    <p onClick={() => {


                        axios.get("http://localhost:2325/sort/gender?gender=female")
                            .then((res) => {
                                handleFilter(res.data.product)
                            }).catch((err) => {
                                console.log(err)
                            })
                        // alert("Hello")

                        // handleFilter(bags.filter(bag => bag.gender === "female"))

                    }} > Women</p>

                    <p> Unisex</p>
                </div>
            </div>






            <div>
                <button className="sorting-btn" onClick={() => {
                    if (color) {
                        setColor(false);
                    }
                    else {
                        setColor(true);
                    }
                }}>Color</button>
                <div className="sorting-div" style={color ? { display: "none" } : { display: "block" }}>

                    <p onClick={() => {


                        axios.get("http://localhost:2325/sort/color?color=strongblue")
                            .then((res) => {
                                handleFilter(res.data.prodColor)
                            }).catch((err) => {
                                console.log(err)
                            })
                        // alert("Hello")

                        // handleFilter(bags.filter(bag => bag.gender === "female"))
                    }}>
                        strongblue</p>
                    <p
                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=red")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}> red</p>

                    <p
                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=darkblue")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    > darkblue</p>

                    <p
                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=yellow")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    >yellow</p>
                    <p
                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=cyan")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    >cyan</p>

                    <p
                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=pink")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    >pink</p>

                    <p
                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=yellow")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    >yellow</p>

                    <p

                        onClick={() => {


                            axios.get("http://localhost:2325/sort/color?color=green")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}>green</p>

                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/color?color=black")
                                .then((res) => {
                                    handleFilter(res.data.prodColor)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    >black</p>

                </div>
            </div>

            <div>
                <button className="sorting-btn" onClick={() => {
                    if (brand) {
                        setBrand(false);
                    }
                    else {
                        setBrand(true);
                    }
                }}>Brand</button>
                <div className="sorting-div" style={brand ? { display: "none" } : { display: "block" }}>

                    <p onClick={() => {
                        axios.get("http://localhost:2325/sort/brand?brand=FJÄLLRÄVEN")
                            .then((res) => {
                                handleFilter(res.data.prodBrand)
                            }).catch((err) => {
                                console.log(err)
                            })
                        // alert("Hello")

                        // handleFilter(bags.filter(bag => bag.gender === "female"))
                    }}>
                        FJÄLLRÄVEN</p>

                </div>
            </div>







            <div>
                <button className="sorting-btn" onClick={() => {
                    if (Price) {
                        setPrice(false);
                    }
                    else {
                        setPrice(true);
                    }
                }}>Price</button>
                <div className="sorting-div" style={Price ? { display: "none" } : { display: "block" }}>

                    <p onClick={() => {
                        axios.get("http://localhost:2325/sort/price?from=0&to=2000")
                            .then((res) => {
                                handleFilter(res.data.prodPrice)
                            }).catch((err) => {
                                console.log(err)
                            })
                        // alert("Hello")

                        // handleFilter(bags.filter(bag => bag.gender === "female"))
                    }}
                    >
                        0-2000</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/price?from=2000&to=4000")
                                .then((res) => {
                                    handleFilter(res.data.prodPrice)

                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    > 2000-4000</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/price?from=4000&to=6000")
                                .then((res) => {
                                    handleFilter(res.data.prodPrice)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    >  4000-6000</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/price?from=6000&to=8000")
                                .then((res) => {

                                    handleFilter(res.data.prodPrice)

                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    > 6000-8000</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/price?from=8000&to=10000")
                                .then((res) => {
                                    handleFilter(res.data.prodPrice)
                                }).catch((err) => {
                                    console.log(err)
                                })
                            // alert("Hello")

                            // handleFilter(bags.filter(bag => bag.gender === "female"))
                        }}
                    > 8000-10000</p>
                </div>
            </div>

            <div>
                <button className="sorting-btn" onClick={() => {
                    if (Rating) {
                        setRating(false);
                    }
                    else {
                        setRating(true);
                    }
                }}>Rating</button>
                <div className="sorting-div" style={Rating ? { display: "none" } : { display: "block" }}>

                    <p onClick={() => {
                        axios.get("http://localhost:2325/sort/rating?rating=5")
                            .then((res) => {
                                handleFilter(res.data.prodRating)
                            }).catch((err) => {
                                console.log(err)
                            })
                    }}
                    >
                        5</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/rating?rating=4")
                                .then((res) => {
                                    handleFilter(res.data.prodRating)
                                }).catch((err) => {
                                    console.log(err)
                                })
                        }}
                    > 4</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/rating?rating=3")
                                .then((res) => {
                                    handleFilter(res.data.prodRating)
                                }).catch((err) => {
                                    console.log(err)
                                })
                        }}
                    > 3</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/rating?rating=2")
                                .then((res) => {
                                    handleFilter(res.data.prodRating)
                                }).catch((err) => {
                                    console.log(err)
                                })
                        }}
                    >2</p>
                    <p
                        onClick={() => {
                            axios.get("http://localhost:2325/sort/rating?rating=1")
                                .then((res) => {
                                    handleFilter(res.data.prodRating)
                                }).catch((err) => {
                                    console.log(err)
                                })
                        }}
                    >1</p>
                </div>
            </div>





        </div>
    )
}
