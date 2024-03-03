const express = require("express")
const router = express.Router()
const cars = require("./carsRoute")
const orders = require('./orderRoute')

router.use("/api/cars", cars)
router.use("/api/orders", orders)

module.exports = router