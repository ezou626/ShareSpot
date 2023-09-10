import { Metadata } from 'next';
import React from 'react';
import Link from "next/link";

export const metadata: Metadata = {
    title: 'ShareSpot',
  }

function HomePage() {
    return (
        <>
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