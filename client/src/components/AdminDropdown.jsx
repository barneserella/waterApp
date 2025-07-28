import { useState } from "react";

const AdminDropdown = () => {
    return (
        <>
            <ul>
                <li>
                    <div className='login-button'>
                        <SignedOut>
                            <SignInButton />                          
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div> 
                </li>
            </ul>
        </>
    )
};

export default AdminDropdown;