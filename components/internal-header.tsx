"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

interface InternalHeaderProps {
  title: string
  subtitle?: string
  showBack?: boolean
  showHome?: boolean
}

export function InternalHeader({ 
  title, 
  subtitle, 
  showBack = true,
  showHome = true 
}: InternalHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    // Check if there's history to go back to
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <header className="relative z-10 flex items-center gap-2 px-4 sm:px-6 pt-4 sm:pt-5 pb-2 shrink-0">
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={handleBack}
            aria-label="Voltar"
            className="nav-btn w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 border border-[#0B5FFF]/30 bg-[#0A1A2F]/60 backdrop-blur hover:border-[#00D4FF]/50 hover:bg-[#0B5FFF]/20"
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
        )}
        {showHome && (
          <Link
            href="/"
            aria-label="Ir para Home"
            className="nav-btn w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 border border-[#0B5FFF]/30 bg-[#0A1A2F]/60 backdrop-blur hover:border-[#00D4FF]/50 hover:bg-[#0B5FFF]/20"
          >
            <Home size={18} className="text-white" />
          </Link>
        )}
      </div>
      
      <div className="flex-1 min-w-0 text-center px-2">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00D4FF] to-white truncate">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-muted-foreground truncate mt-0.5">{subtitle}</p>
        )}
      </div>
      
      {/* Spacer to balance the header */}
      <div className="w-[88px] sm:w-[96px]" />
    </header>
  )
}
