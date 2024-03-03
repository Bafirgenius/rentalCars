const mongoose = require("mongoose")

const carsSchema = mongoose.Schema(
    {
        car_name: {
            type: "String",
            required: true
        },
        day_rate: {
            type: "Number",
            required: true
        },
        month_rate: {
            type: "Number",
            required: true
        },
        image: {
            type: "String",
            required: true
        }
    }, {
    timestamps: true,
}
)

const cars = mongoose.model("cars", carsSchema)

module.exports = cars