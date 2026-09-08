import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { generateMetadata } from '@/lib/seo';
import { getAllSchemas } from '@/lib/schema';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const schemas = getAllSchemas();

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>

      <body className="font-sans antialiased">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}