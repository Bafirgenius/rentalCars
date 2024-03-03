const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ordersSchema = mongoose.Schema(
    {
        car_id: {
            type: Schema.Types.ObjectId,
            ref: 'cars',
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        order_date: {
            type: "Date",
            default: Date.now,
        },
        pickup_date: {
            type: "Date",
            required: true
        },
        dropoff_date: {
            type: "Date",
            required: true
        },
        pickup_location: {
            type: "String",
            required: true
        },
        dropoff_location: {
            type: "String",
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const orders = mongoose.model("orders", ordersSchema)

module.exports = orders