import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearcBox from '@/components/SearcBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB ',
  description: 'this is a moviw database clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearcBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
