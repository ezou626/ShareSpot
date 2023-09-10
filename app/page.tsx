"use client"

import React, { useContext, useState } from 'react';
import Link from "next/link";
import NavigationBar from './components/navigationBar';
import Login from './components/loginModal';
import { UserContext } from './contexts/userContext';

function HomePage() {

    const [showModal, setShowModal] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const [error, setError] = useState('');

    function setShowModalWrapper(value: boolean) {
        setShowModal(value);
    }

    function loginWrapper(username: string, password: string) {
        if (user.email != "") {
            return;
        }
        fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"user email": {username}, "user password": {password}})
        })
        .then(response => response.json())
        .then(response => {
            switch (response["authentication_status"]) {
                case "success":
                    setUser({email: username, loggedIn: true})
                    setShowModalWrapper(false)
                    setError('');
                    break;
                case "failed":
                    setError("Your password or username is incorrect.");
                    break;
                case "does not exist":
                    setError("No account exists with this username.");
                    break;
                default:
                    break;
            }
        })
    }

    return (
        <>
            <NavigationBar showModal={() => {setShowModalWrapper(true)}} />
            {showModal ? <Login login={loginWrapper} unShowModal={() => setShowModalWrapper(false)} error={error}/> : <></>}
             <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl animate-revealbody'>
                <h1 className='text-6xl font-bold text-blue-950'>ShareSpot</h1>
                <h2 className='text-4xl text-slate-600'>The USB-based Social Media Platform</h2>
                <Link href="/history" passHref legacyBehavior>
                        <a className="hover:underline">Locations</a>
            </Link>
            <div></div>
            <Link href="/home" passHref legacyBehavior>
                        <a className="hover:underline">Home</a>
            </Link>
            <div></div>
            <Link href="/temp" passHref legacyBehavior>
                        <a className="hover:underline">Pages</a>
            </Link>
            </main>
        </>
    )
}

export default HomePage;