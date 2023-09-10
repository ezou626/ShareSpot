"use client";
import { SetStateAction, useState } from "react";

function Login({login, unShowModal}: {login: (username: string, password: string) => void, unShowModal: () => void}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(input: { target: { name: SetStateAction<string>; }; }) {
        setUsername(input.target.name);
    }

    function handlePasswordChange(input: { target: { name: SetStateAction<string>; }; }) {
        setPassword(input.target.name);
    }

    return <div className='fixed m-auto inset-0 flex flex-col justify-center bg-gray-800 z-50 space-y-5 w-60 h-60 p-5 rounded'>
        <button onClick={unShowModal} className='rounded bg-red-600 hover:bg-red-400 text-white float-right px-1'>Close</button>
        <input className='rounded border-gray-500 bg-inherit pt-5 text-white' placeholder="Username" onChange={handleUsernameChange} />
        <input className='rounded border-gray-500 bg-inherit pb-5 text-white' type="password" placeholder="Password" onChange={handlePasswordChange}/>
        <button onClick={() => {login(username, password)}} className='rounded bg-blue-600 hover:bg-blue-400 text-white float-left px-1'>Submit</button>
    </div>
}

export default Login;