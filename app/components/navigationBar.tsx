"use client";
import {useContext} from 'react';
import { UserContext } from '../contexts/userContext';

import Link from "next/link";

function NavigationBar({showLoginModal, showSignupModal}: {showLoginModal: () => void, showSignupModal: () => void}) {

    const { user, setUser } = useContext(UserContext);

    function logout() {
        setUser({email: '', loggedIn: false})
    }

    let conditionalButtons = !user.loggedIn ? 
        <><button className='hover:underline' onClick={showLoginModal}>Login</button>
        <button className='hover:underline' onClick={showSignupModal}>Sign Up</button></> : 
        <><Link className='hover:underline' href='profile'>Profile</Link>
        <Link className='hover:underline' href='feed'>Feed</Link>
        <button className='hover:underline' onClick={logout}>Logout</button></>;

    return (
        <nav className = 'py-5'>
            <div className='px-7 space-x-5 float-right'>
                <Link className='hover:underline' href='/'>Home</Link>
                {conditionalButtons}
            </div>
        </nav>
    )
}

export default NavigationBar;