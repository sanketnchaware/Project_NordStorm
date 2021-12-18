const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb+srv://nordstrom:258963@cluster0.wc4zd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect;