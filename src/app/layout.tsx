import type { Metadata } from 'next';
import { DM_Sans, Anonymous_Pro } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/StoreProvider';
import Navbar from '@/components/layout/Navbar';

const dmsans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const anonymousPro = Anonymous_Pro({
  variable: '--font-anonymous-pro',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'kangfeb.',
  description: 'My Personal Website',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${dmsans.variable} ${anonymousPro.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
