"use client";
import { SetStateAction, useState } from "react";

function Login({login, unShowModal, error}: {login: (username: string, password: string) => void, unShowModal: () => void, error: string}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return <div className='fixed m-auto inset-0 flex flex-col justify-center bg-gray-800 z-50 space-y-5 w-60 h-60 p-5 rounded'>
        <button onClick={unShowModal} className='rounded bg-red-600 hover:bg-red-400 text-white float-right px-1'>Close</button>
        <input className='rounded border-gray-500 bg-inherit pt-5 text-white' placeholder="Username" onChange={handleUsernameChange} />
        <input className='rounded border-gray-500 bg-inherit pb-5 text-white' type="password" placeholder="Password" onChange={handlePasswordChange}/>
        <p hidden={error==''}>{error}</p>
        <button onClick={() => {login(username, password);       
        }} className='rounded bg-blue-600 hover:bg-blue-400 text-white float-left px-1'>Submit</button>
    </div>
}

export default Login;