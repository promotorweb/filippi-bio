"use client"

import { ReactNode } from "react"
import { InternalHeader } from "./internal-header"
import { WhatsAppFab } from "./whatsapp-fab"

interface PageShellProps {
  title: string
  subtitle?: string
  children: ReactNode
  showBack?: boolean
  showHome?: boolean
}

export function PageShell({ 
  title, 
  subtitle, 
  children, 
  showBack = true,
  showHome = true 
}: PageShellProps) {
  return (
    <div className="bg-particles relative min-h-screen w-full flex flex-col page-fade">
      <InternalHeader 
        title={title} 
        subtitle={subtitle} 
        showBack={showBack}
        showHome={showHome}
      />
      <main className="relative z-10 flex-1 min-h-0 overflow-hidden">
        {children}
      </main>
      <WhatsAppFab />
    </div>
  )
}
