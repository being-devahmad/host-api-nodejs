const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

async function connectDb() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
}

module.exports = connectDb;
