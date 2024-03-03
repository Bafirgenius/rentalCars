const mongoose = require('mongoose')
function connectDB() {
    mongoose.connect('mongodb+srv://bafir:bafir123@cluster0.1z4zok6.mongodb.net/rental_car')
    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })
    connection.on("error", () => {
        console.log("Mongo DB Connection Error")
    })
}
connectDB()

module.exports = mongoose