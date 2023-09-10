"use client";
import {useContext} from 'react';
import { UserContext } from '../contexts/userContext';

import Link from "next/link";

function NavigationBar({showModal}: {showModal: () => void}) {

    const { user, setUser } = useContext(UserContext);

    function logout() {
        setUser({email: '', loggedIn: false})
    }

    let conditionalButtons = !user.loggedIn ? 
        <button onClick={showModal}>Login</button> : 
        <><Link href='profile'>Profile</Link>
        <Link href='feed'>Feed</Link>
        <button onClick={logout}>Logout</button></>;

    return (
        <nav>
            <div className='px-5 space-x-5'>
                <Link href='/'>Home</Link>
                {conditionalButtons}
            </div>
        </nav>
    )
}

export default NavigationBar;