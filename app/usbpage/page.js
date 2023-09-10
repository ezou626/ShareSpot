"use client"
import React, { useState, useContext, useEffect } from 'react';
import UsbBox from '../components/usbBox'
import { useSearchParams } from "next/navigation";
import { UserContext } from '../contexts/userContext';

function UsbPage() {
    const { user, setUser } = useContext(UserContext)
    const searchParams = useSearchParams();
    const [res, setRes] = useState([])

    useEffect(() => {
        function getUsb() {
            fetch('http://127.0.0.1:5000/getusb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'usb-hash': searchParams.get('usbId') }),
            })
                .then((response) => response.json())
                .then((response) => {
                    setRes(response.locations);
                });
        }

        getUsb();
    }, []);

    return (
        <main className='overflow-y-clip space-y-5 py-8 mx-auto max-w-5xl'>
            <h1 className='text-6xl font-bold text-blue-400'>USB </h1>
            <h2> {searchParams.get("usbId")}</h2>
            <ul>
                {res.map((usb, index) => (
                    <UsbBox lat={usb.location.lat} lng={usb.location.lng} description={usb.text} imagePath={usb.image} />
                ))}
            </ul>
        </main>)
};

export default UsbPage;