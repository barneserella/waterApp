const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express()
const PORT = 3000;

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log('Connected to database successfully.')
        })
        .catch((error) => {
            console.error("Error", error)
        });

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: {type: Date, required: true },
    service: { type: String, required: true },
    message: { type: String, required: false },
})

const Booking = mongoose.model('Booking', BookingSchema)

app.get('/api/bookings', async (req, res) => {
    try{
        const bookings = await Booking.find().sort({date: 1})
        res.json(bookings)
    }catch(error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: 'Error fetching bookings' })
    }
});

app.post('/api/bookings', async (req, res) => {
    try{
        const { name, address, phoneNumber, date,  service, message } = req.body
        console.log(req.body)
        const newBooking = new Booking({name, address, phoneNumber, date, service, message })
        await newBooking.save()
        res.json(newBooking)
    }catch(error) {
        console.error("Error saving bookings:", error);
        res.status(500).json({ message: 'Error saving bookings' })
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});