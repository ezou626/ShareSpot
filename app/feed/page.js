"use client"

import React, { useEffect, useState } from 'react';
import UsbBox from '../components/usbBox';

const YourComponent = () => {
  const [usbs, setUsbs] = useState([]);

  useEffect(() => {
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

  return (
    <main className='overflow-y-clip space-y-5 py-8 mx-auto max-w-5xl'>
      <h1 className='text-6xl font-bold text-blue-400'>Feed</h1>
      <div className="text-white">
        <ul>
          {usbs.map((usb, index) => (
            <UsbBox lat={usb.locations[0].location.lat} lng={usb.locations[0].location.lng} description={usb.locations[0].text} imagePath={usb.locations[0].image} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default YourComponent;

