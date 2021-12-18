
// How to use API
/*
Base URL = http://localhost:2325

1.Get all products:
-> http://localhost:2325/product

2.Get product by gender:
-> http://localhost:2325/sort/gender?gender=Male 

3.Get product by color:
-> http://localhost:2325/sort/color?color=red 

4.Get product by brand:
-> http://localhost:2325/sort/brand?brand=nike

5.Get product by price:
-> http://localhost:2325/sort/price?from=100&to=1000 

6.Get product by rating:
-> http://localhost:2325/sort/rating?rating=1  

7.Get product by id or single product
-> http://localhost:2325/product/single/1

*/



const router = require('express').Router();
const Product = require("../models/product.model");


//to get all products
router.get("/product", async (req, res) => {
    const product = await Product.find().lean().exec()
    return res.status(201).send({ product })
})

//to get single products
router.get("/product/single/:id", async (req, res) => {
    const id = req.params.id;
    const product = await Product
        .findById({ _id: id })
        .lean()
        .exec()
    return res.status(201).send({ product })
})

// to sort the product by gender 
router.get("/sort/gender", async (req, res) => {
    const gender = req.query.gender;
    const product = await Product
        .find({ gender: { $eq: `${gender}` } })
        .lean()
        .exec();
    return res.status(201).send({ product });
})

//to sort the product by colors
router.get("/sort/color", async (req, res) => {
    const color = req.query.color;
    const prodColor = await Product
        .find({ color: { $eq: `${color}` } })
        .lean()
        .exec();
    return res.status(201).send({ prodColor });
})

//to sort the product by brands
router.get("/sort/brand", async (req, res) => {
    const brand = req.query.brand;
    const prodBrand = await Product
        .find({ brand: { $eq: `${brand}` } })
        .lean()
        .exec();
    return res.status(201).send({ prodBrand });
})

//to sort the product by price
router.get("/sort/price", async (req, res) => {
    const from = req.query.from;
    const to = req.query.to;
    const prodPrice = await Product
        .find({ $and: [{ price: { $gt: `${from}` } }, { price: { $lt: `${to}` } }] })
        .lean()
        .exec();
    return res.status(201).send({ prodPrice });
})


//to sort the product by rating
router.get("/sort/rating", async (req, res) => {
    const rating = req.query.rating;

    if (rating <= 5) {
        const prodRating = await Product
            .find({ rating: { $eq: `${rating}` } })
            .lean()
            .exec();
        return res.status(201).send({ prodRating });
    } else {
        return res.status(400).send("rating must be below 5");
    }

})

module.exports = router;
