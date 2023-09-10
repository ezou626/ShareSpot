"use client"
import React from 'react';
import UsbBox from '../components/usbBox'
import { useSearchParams } from "next/navigation";

interface dataType {
    usb_id: string;
}

function UsbPage() {
    const searchParams = useSearchParams();
    return (
        <main className='overflow-y-clip space-y-5 py-8 mx-auto max-w-5xl'>
            <h1 className='text-6xl font-bold text-blue-400'>USB id - whatever</h1>
            <h2> {searchParams.get("usbId")}</h2>
        </main>)
};


export default UsbPage;