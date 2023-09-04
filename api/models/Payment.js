const mongoose = require('mongoose')
const Role = require('./Role')
var SchemaTypes = mongoose.Schema.Types

const PaymentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    totalPrice: {
        type: Number,
        required:true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('payment', PaymentSchema)