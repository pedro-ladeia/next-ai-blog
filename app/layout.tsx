import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Ai Blog',
  description: 'Blog that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={open_sans.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
