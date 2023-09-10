import { Arimo } from 'next/font/google';
import React from 'react';
import './globals.css';

const arimo = Arimo({
    subsets: ['latin'],
    weight: ['400']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (<html lang='en' className={arimo.className}>
    <head>
    </head>
    <body className={'bg-gray-950'}>
        {children}
    </body>
    </html>);
}