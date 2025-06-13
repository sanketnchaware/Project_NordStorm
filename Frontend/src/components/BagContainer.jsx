import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import { Filter } from "./Filter";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const BagContainer = () => {
  const [bags, setBags] = useState([]);
  console.log("bags:", bags);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://localhost:3333/products")
      .then((res) => {
        setBags(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleFilter = (newbags) => {
    setBags(newbags);
  };

  return (
    <>
      <Navbar />

      <div className="horizontal-line">{/* horizontal line */}</div>

      <div className="main-container">
        <div className="filters">
          <Filter bags={bags} handleFilter={handleFilter} />
        </div>

        <div className="products">
          <div>
            <h4>Men's Bags & Backpacks </h4>
            <p className="items"> {bags?.length} items</p>
          </div>
          <div className="Bag-div">
            {bags?.map((item) => {
              return (
                <div key={item.id} className="bag-prod ">
                  <div className=" image-hover product_image">
                    <img src={item.image} alt="" className=" prod_bag_image" />

                    <Link to={`/product/${item._id}`} id="Add-btn">
                      {" "}
                      Quick View
                    </Link>
                  </div>

                  <p
                    className="product_info"
                    style={{
                      color: "#00823F",
                      fontWeight: "700",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Arrives before Christmas
                  </p>

                  <p
                    className="product_info"
                    style={{
                      color: "#D61F27",
                      fontWeight: "700",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Price Matched
                  </p>

                  <p
                    className="product_info"
                    style={{
                      color: "#3441B6",
                      marginBottom: "0.8rem",
                      fontWeight: "700",
                    }}
                  >
                    New
                  </p>

                  <p
                    className="product_info"
                    style={{
                      color: "#393939",
                      fontWeight: "700",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {item.productName}{" "}
                  </p>

                  <p
                    className="product_info"
                    style={{ color: "#D61F27", fontWeight: "700" }}
                  >
                    Rs.{item.price}
                  </p>

                  <p
                    className="product_info"
                    style={{ color: "#393939", fontWeight: "390" }}
                  >
                    Up to 25% off.{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="horizontal-line">{/* horizontal line */}</div>
    </>
  );
};
