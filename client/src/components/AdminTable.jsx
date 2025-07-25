import { useState, useEffect } from "react";

const AdminTable = () => {

    const [bookings, setBookings] = useState([]);
    
      useEffect(() => {
        const fetchBookings = async() => {
          const response = await fetch('http://localhost:3000/api/bookings');
          const data = await response.json();
          setBookings(data);
        }
    
        fetchBookings();
      }, [])


return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Date of Service</th>
          <th>Service</th>
          <th>Message</th>
          <th>Created On</th>
        </tr>
      </thead>
      
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking._id}>
            <td data-label="Id">{booking._id}</td>
            <td data-label="Name">{booking.name}</td>
            <td data-label="Address">{booking.address}</td>
            <td data-label="Phone Number">{booking.phoneNumber}</td>
            <td data-label="Date of Service">{new Date(booking.date).toLocaleDateString()}</td>
            <td data-label="Service">{booking.service}</td>
            <td data-label="Message">{booking.message}</td>
            <td data-label="Created On">Date Created On</td>
          </tr>
        ))}
      </tbody>
    </table>

    )};

    export default AdminTable;