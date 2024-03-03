const Orders = require("../models/orders")

module.exports = {
    createOrder: async (req, res) => {
        const { body } = req
        try {
            const data = {
                ...body
            }
            const newOrder = new Orders(data)
            await newOrder.save()
            res.status(200).json(newOrder)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getAllOrders: async (req, res) => {
        try {
            const orders = await Orders.find().populate("car_id").sort({ createdAt: -1 })
            res.status(200).json(orders)
        } catch (error) {
            res.status(409).json(error)
        }
    }
}