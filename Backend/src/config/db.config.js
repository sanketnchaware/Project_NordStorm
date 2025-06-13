const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sanketnchaware:mxEzbvfrYitFXsEn@nordstrom01.5tkes8a.mongodb.net/NordtromDB"
  );
};

module.exports = connect;
