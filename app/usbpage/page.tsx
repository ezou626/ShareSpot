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
            <UsbBox name="Item Name" description="Item Description Item DescriptionItem DescriptionItem DescriptionItem DescriptionItem DescriptionItem DescriptionItem DescriptionItem Description" imagePath="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
            <UsbBox name="Item Name" description="Item DescriptionItem DescriptionItem DescriptionItem DescriptionItem DescriptionItem DescriptionItem Description" imagePath="https://pbs.twimg.com/media/C3MaTY1UYAA-NnC.jpg" />
            <UsbBox name="Item Name" description="Item DescriptionItem DescriptionItem DescriptionItem DescriptionItem Description" imagePath="https://online-courses.club/wp-content/uploads/2020/11/Sakimi-Chan-Patreon-Term-134.png" />

        </main>)
};

export default UsbPage;