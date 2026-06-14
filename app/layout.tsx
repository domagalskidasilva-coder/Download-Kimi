import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fable TV Beta — Download for Windows, Linux & Android',
  description: 'Download the latest Fable TV Beta desktop app. Fast, clean media player built for binge watching. Available for Windows, Linux and Android.',
  keywords: 'Fable TV, desktop app, media player, Windows, Linux, download, beta',
  openGraph: {
    title: 'Fable TV Beta — Download for Desktop',
    description: 'Fast. Clean. Built for binge watching. Download Fable TV Beta for Windows, Linux and Android.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
