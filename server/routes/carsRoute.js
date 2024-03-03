const express = require("express")
const router = express.Router()
const uploadCarMiddleware = require("../middlewares/uploadCar")
const { createCar, getAllCars, getCarById } = require("../controllers/cars")

router.get("/", getAllCars)
router.get("/:car_id", getCarById)
router.post("/upload", uploadCarMiddleware.single("image"), createCar)

module.exports = router