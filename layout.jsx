import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Developer Portfolio',
  description: 'Professional portfolio showcasing web development projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}
