import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Filippi Santos | Presença Online para Negócios Locais',
  description: 'Crio sites e páginas de biolink premium para negócios locais. Demonstrações e templates para barbearias, salões, pizzarias e muito mais.',
  keywords: ['biolink', 'site profissional', 'negócios locais', 'barbearia', 'salão de beleza', 'pizzaria', 'presença online'],
  authors: [{ name: 'Filippi Santos' }],
  openGraph: {
    title: 'Filippi Santos | Presença Online para Negócios Locais',
    description: 'Sites e biolinks premium para ativar sua presença online',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
