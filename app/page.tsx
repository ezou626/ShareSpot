import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'ShareSpot',
  }

function HomePage() {
    return (
        <>
            <main className='px-10 overflow-y-clip space-y-5 py-32 mx-auto max-w-5xl'>
                <h1 className='text-6xl font-bold text-blue-950'>ShareSpot</h1>
                <h2 className='text-4xl text-slate-600'>The USB-based Social Media Platform</h2>
            </main>
        </>
    )
}

export default HomePage;