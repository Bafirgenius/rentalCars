const Cars = require('../models/cars')

module.exports = {
    createCar: async (req, res) => {
        const { body, file } = req
        const uploadFile = file.location
        try {
            const data = {
                ...body,
                image: uploadFile
            }
            const newCar = new Cars(data)
            await newCar.save()
            res.status(200).json(newCar)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getAllCars: async (req, res) => {
        try {
            const { page = 1, search } = req.query
            const getPagination = async (page, limit) => {
                const totalItem = await Cars
                    .find()
                    .countDocuments();
                const activePage = page;
                const totalPage = Math.ceil(totalItem / limit);

                return { totalItem, activePage, totalPage };
            }
            if (search) {
                const cars = await Cars.aggregate([
                    {
                        $match: {
                            car_name: new RegExp(search, 'gi')
                        }
                    },
                ]).limit(8).skip((page - 1) * 8)
                const pageInfo = await getPagination(page, 8)
                res.status(200).json({ ...pageInfo, data: cars })
            } else {
                const cars = await Cars.find().limit(8).skip((page - 1) * 8)
                const pageInfo = await getPagination(page, 8)
                res.status(200).json({ ...pageInfo, data: cars })
            }
        } catch (error) {
            res.status(409).json({ error: error.msg })
        }
    },
    getCarById: async (req, res) => {
        try {
            const { car_id } = req.params
            const car = await Cars.findById({ _id: car_id })
            res.status(200).json(car)
        } catch (error) {
            res.status(409).json({ error: error.msg })
        }
    }
}