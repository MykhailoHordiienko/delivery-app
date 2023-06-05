import Header from '@/components/Header/Header';
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Delivery App',
  description: 'ELIFTECH TEST',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} h-screen flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
