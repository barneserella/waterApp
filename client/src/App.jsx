import { Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


import './App.css';

function App() {
  

  return (
    <>
      <div>
        <header>
          <div className="header-content">
            <h1 className="logo">AquaHaul Solutions</h1>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li> | <li><a href="/services">Services</a></li> | <li><a href="/bookings">Booking</a></li> | 
                <li>
                  <SignedOut>
                            <SignInButton>
                              <button>Admin</button>                          
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                </li>
              </ul>

            </nav>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      
    </>
  )
}

export default App;
