import { Arimo } from 'next/font/google';
import React from 'react';
import './globals.css';
import { LoginProvider } from './components/provider';
import NavigationBar  from './components/navigationBar';
import Login from './components/loginModal';
import { Metadata } from 'next';

const arimo = Arimo({
    subsets: ['latin'],
    weight: ['400']
});

export const metadata: Metadata = {
    title: 'ShareSpot',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    
    return (<html lang='en' className={arimo.className}>
    <head>
    </head>
    <body className={'bg-gray-950 text-white'}>
        <LoginProvider>{children}</LoginProvider>
    </body>
    </html>);
}