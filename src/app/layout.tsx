import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vulcan',
  description: 'Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-dark`} >{children}</body>
    </html>
  )
}
