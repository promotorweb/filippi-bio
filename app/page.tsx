"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Globe, Eye, LayoutGrid } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { InstagramPopup } from "@/components/instagram-popup"
import { SocialProofPopup } from "@/components/social-proof-popup"
import { SITE_URL } from "@/lib/contact"

export default function HomePage() {
  const [showInstagramPopup, setShowInstagramPopup] = useState(false)

  return (
    <div className="bg-particles relative min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center px-6 py-12 page-fade">
      <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-sm">
        
        <div className="glow-ring-subtle float-anim">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl">
            <Image
              src="/images/filippi.png"
              alt="Filippi Santos"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
              priority
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00D4FF] to-white">
            Filippi Santos
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Presenca Online para Negocios Locais
          </p>
        </div>

        <p className="text-xs sm:text-sm text-center text-[#00D4FF] font-medium fade-in-delay max-w-[280px]">
          Nao perca mais clientes no Instagram com isso
        </p>

        <div className="w-full flex flex-col gap-3 mt-1">
          <Link href="/demonstracao" className="premium-btn pulse-btn w-full py-4 flex items-center justify-center gap-2">
            <Eye size={18} />
            Ver Demonstracao (como funciona)
          </Link>

          <Link href="/sites" className="premium-btn-secondary w-full py-4 flex items-center justify-center gap-2">
            <LayoutGrid size={18} />
            Ver Modelos prontos
          </Link>
        </div>

        <p className="text-xs text-muted-foreground/70 text-center">
          leva menos de 30 segundos pra entender
        </p>

        <div className="flex items-center justify-center gap-8 mt-2">
          <div className="flex flex-col items-center">
            <button onClick={() => setShowInstagramPopup(true)} className="social-btn">
              <FaInstagram size={20} />
            </button>
            <span className="text-xs">Ver perfil</span>
          </div>

          <div className="flex flex-col items-center">
            <a href={SITE_URL} target="_blank" className="social-btn">
              <Globe size={20} />
            </a>
            <span className="text-xs">Ver exemplo real</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-3">
          <span className="text-sm">+ de 20 modelos criados</span>
          <span className="text-xs text-muted-foreground">usado por negocios locais</span>
        </div>
      </div>

      <SocialProofPopup />

      <InstagramPopup 
        isOpen={showInstagramPopup} 
        onClose={() => setShowInstagramPopup(false)} 
      />
    </div>
  )
}
