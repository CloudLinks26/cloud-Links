import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Sora } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GlobalProvider } from '@/components/GlobalProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'CloudLinks',
  description: 'CloudLinks — Earn by Sharing. India\'s most trusted affiliate marketing and creator monetization platform.',
  icons: {
    icon: 'https://res.cloudinary.com/couponsbit/image/upload/v1786449391/cloud-link-favicon_hmrtar.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-[#F5F0E8] text-[#1A3C34] flex flex-col font-sans selection:bg-[#C89B2A]/20">
        <GlobalProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
