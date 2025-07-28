import ReactDOM from 'react-dom/client';
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import Admin from './pages/Admin.jsx';
import Services from './pages/Services.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Clerk Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY){
  throw new Error('Missing Key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <Router>
    <Routes>
      <Route path ='/' element={<App/>}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='bookings' element={<Booking />} />
        <Route path='admin' element={<Admin />} />
        
        
      </Route>
    </Routes>
  </Router>
  </ClerkProvider>

);
