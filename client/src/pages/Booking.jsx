import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const services = [
    'Residential Water Delivery',
    'Commercial Water Delivery',
    'Emergency Water Services',
    'Event Water Supply',
    'Pool Filling Services',
    'Bulk Water Purchase',
    'Custom Solutions',
];


const Booking = () => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [service,setService] = useState('');
    const [message,setMessage] = useState('');

    const [date,setDate] = useState(new Date());

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,phoneNumber,address,date,service,message})
        })
        if(response.ok) {
            alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful.`);
            navigate('/');
        }else {
            alert('Booking failed. Please try again.')
        }
    }

  return (
    <div>
        <h2>Book your Water Delivery</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input 
                type="text" 
                id='name' 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
                required 
                />
            <label htmlFor="">Phone Number:</label>
            <input 
                type="number"
                id='phoneNumber' 
                value={phoneNumber}
                onChange={(e)=> setPhoneNumber(e.target.value)} 
                required/>
            <label htmlFor="">Address:</label>
            <input 
                type="address"
                id='address'
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
                required
                />
            <label htmlFor="date">Date:</label>

            <Calendar 
                onChange={setDate}
                value={date}
                required
                />

            <div>Selected Date: {date.toLocaleDateString()}</div>

            <label htmlFor="service">Service:</label>
            <select 
                id="service"
                value={service}
                onChange={(e)=> setService(e.target.value)}
                required
                >
                    <option value='' disabled>Select a service</option>
                    {services.map((service, index)=> (
                        <option key={index} value={service}>{service}</option>
                    ))}
            </select>
            <label htmlFor="message">Message:</label>
            <textarea 
                name="message" 
                id="message" 
                value={message} 
                onChange={(e)=> setMessage(e.target.value)} 
                rows="4" cols="50">Add additional  notes here.</textarea>

            <button type='submit'>Book</button>
        </form>
    </div>
  )
}

export default Booking;