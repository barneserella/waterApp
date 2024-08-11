import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

function App() {
  

  return (
    <>
      <div>
        <header>
          <h1 className='text-3xl font-bold underline bg-red-200'>Bulk Water Delivery</h1>
          <nav>
            <a href='/'>Home</a> | <a href="/services">Services</a> | <a href="/bookings">Booking</a> | <a href="/admin">Admin</a>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App;
