require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const productRoutes = require("./routes/products")
const dbUrl = process.env.MONGO_URL
const connectDb = require("./db/connect")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// middleware
app.use("/api/products", productRoutes)


const start = async (req, res) => {
    try {
        await connectDb()
        app.listen(port, () => {
            console.log(`Listening on port ${port}!`)
        })
    } catch (error) {
        console.log("error listening on port ${port}");
    }
}
start()