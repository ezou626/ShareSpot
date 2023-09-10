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
                <h1 className='text-6xl font-bold text-blue-400'>ShareSpot</h1>
                <h2 className='text-4xl text-slate-400'>The USB-based Social Media Platform</h2>
                <div className="py-4 space-y-4">
                    <div>
                        <Link href="/history" passHref legacyBehavior>
                            <a className="hover:underline text-slate-200 text-2xl">Locations</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/home" passHref legacyBehavior>
                            <a className="hover:underline text-slate-200 text-2xl">Home</a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;