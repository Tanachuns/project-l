'use client'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  )
}
