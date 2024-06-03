import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Aside from './components/Aside';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Security Tool',
    description: ''
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={rubik.className + ' flex h-screen w-screen'}>
                <Aside />

                <div className="flex h-full grow flex-col">
                    <Header />

                    {children}
                </div>
            </body>
        </html>
    );
}
