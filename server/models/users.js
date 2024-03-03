const mongoose = require("mongoose")

const usersSchema = mongoose.Schema(
    {
        email: {
            type: "String",
            required: true
        },
        password: {
            type: "Number",
            required: true
        },
    }, {
    timestamps: true,
}
)

const users = mongoose.model("users", usersSchema)

module.exports = users