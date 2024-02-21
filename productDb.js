require("dotenv").config()
const connectDb = require("./db/connect")
const Product = require("./models/products")
const ProductJson = require("./products.json")


const addProductsToDB = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        await Product.create(ProductJson)
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
addProductsToDB()