import { Arimo } from 'next/font/google';
import './globals.css';
import React from 'react';

const arimo = Arimo({
    subsets: ['latin'],
    weight: ['400']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (<html lang='en' className={arimo.className}>
    <head>
    </head>
    <body>
        {children}
    </body>
    </html>);
}