"use client"
import React from 'react';
import UsbBox from '../components/usbBox'
import { useSearchParams } from "next/navigation";

interface dataType {
    usb_id: string;
}

/*useEffect(() => {
    const fetchUsbs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/getusbs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsbs(data.hashes);
        console.log(usbs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUsbs();
  }, []);
*/


function UsbPage() {
    const searchParams = useSearchParams();
    return (
        <main className='overflow-y-clip space-y-5 py-8 mx-auto max-w-5xl'>
            <h1 className='text-6xl font-bold text-blue-400'>USB </h1>
            <h2> {searchParams.get("usbId")}</h2>
        </main>)
};



export default UsbPage;

/*    {usbs.map((usb, index) => (
            <UsbBox lat={usb.locations[0].location.lat} lng={usb.locations[0].location.lng} description={usb.locations[0].text} imagePath={usb.locations[0].image} />
*/