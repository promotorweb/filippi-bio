"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function NotFound() {
  return (
    <div className="bg-particles relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center px-6 page-fade">
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm text-center">
        <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          404
        </div>
        <h1 className="text-2xl font-bold text-primary-foreground">
          Página não encontrada
        </h1>
        <p className="text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="premium-btn py-3 px-6 flex items-center justify-center gap-2 text-base mt-4"
        >
          <Home size={18} />
          Voltar ao Início
        </Link>
      </div>
      <WhatsAppFab />
    </div>
  )
}
