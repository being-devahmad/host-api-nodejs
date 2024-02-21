const express = require("express")
const { getAllProducts, getAllProductsTesting } = require("../controllers/products")
const router = express.Router()

// Routes
router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductsTesting)

module.exports = router