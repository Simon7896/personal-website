import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

type TopBarLinkProps = {
  href: string;
  children: React.ReactNode;
} 

const TopBarLink = ({href, children}: TopBarLinkProps) => {
  return (
    <Link className='basis-1/6 py-5 flex-grow bg-transparent hover:bg-slate-300 hover:dark:bg-slate-600' href={href}>{children}</Link>
  )
}

const TopBar = () => {
  return (
    <div className="sticky z-50 top-0 flex flex-row content-center justify-evenly items-stretch text-center w-full bg-slate-50 dark:bg-slate-900">
      <TopBarLink href="/"><p>Home</p></TopBarLink>
      <TopBarLink href="/projects"><p>Projects</p></TopBarLink>
      <TopBarLink href="/contacts"><p>Contacts</p></TopBarLink>
      <TopBarLink href="/about"><p>About</p></TopBarLink>
    </div>
  )
}

const Footer = () => {
 return (
    <div className='bottom-0 text-center'>
      <footer>@2023 Simon Yu</footer>
    </div>
 )
}

export const metadata = {
  title: 'My Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>
          {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
