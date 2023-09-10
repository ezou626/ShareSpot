"use client"

import React, { useContext, useState } from 'react';
import Link from "next/link";
import NavigationBar from './components/navigationBar';
import Login from './components/loginModal';
import { UserContext } from './contexts/userContext';
import SignUp from './components/signupModal';

function HomePage() {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const [error, setError] = useState('');

    function setShowLoginModalWrapper(value: boolean) {
        setShowLoginModal(value);
    }

    function setShowSignupModalWrapper(value: boolean) {
        setShowSignupModal(value);
    }

    function loginWrapper(username: string, password: string) {
        if (user.email != "") {
            return;
        }
        fetch(`https://${process.env.NEXT_PUBLIC_API_URL}/login`, {
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
                    setShowLoginModalWrapper(false)
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


        function signupWrapper(username: string, password: string) {
            if (user.email != "") {
                return;
            }
            fetch(`https://${process.env.NEXT_PUBLIC_API_URL}/createlogin`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"user email": {username}, "user password": {password}})
            })
            .then(response => response.json())
            .then(response => {
                switch (response["create_status"]) {
                    case "success":
                        setUser({email: username, loggedIn: true})
                        setShowSignupModalWrapper(false)
                        setError('');
                        break;
                    case "failed":
                        setError("Account already exists.");
                        break;
                    default:
                        break;
                }
            })
    }

    return (
        <>
            <NavigationBar showLoginModal={() => {setShowLoginModalWrapper(true)}} showSignupModal={() => {setShowLoginModalWrapper(true)}} />
            {showLoginModal ? <Login login={loginWrapper} unShowModal={() => setShowLoginModalWrapper(false)} error={error}/> : <></>}
            {showSignupModal ? <SignUp signup={signupWrapper} unShowModal={() => setShowSignupModalWrapper(false)} error={error}/> : <></>}
             <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl animate-revealbody'>
                <h1 className='text-6xl font-bold text-blue-600'>ShareSpot</h1>
                <h2 className='text-4xl text-blue-400'>The USB-based Social Media Platform</h2>
                {/* <Link href="/history" passHref legacyBehavior>
                        <a className="hover:underline">Locations</a>
                </Link> */}
            </main>
        </>
    )
}

export default HomePage;