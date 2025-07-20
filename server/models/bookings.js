const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: {type: Date, required: true },
    service: { type: String, required: true },
    message: { type: String, required: false },
})

module.exports = mongoose.model('Booking', BookingSchema)