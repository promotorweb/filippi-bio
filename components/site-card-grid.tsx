"use client"

import { ExternalLink } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { buildWhatsappLink } from "@/lib/contact"
import { GridWrapper } from "./grid-wrapper"
import Image from "next/image"

export interface SiteCardItem {
  label: string
  href: string
  image: string
}

interface SiteCardGridProps {
  items: SiteCardItem[]
  whatsappMessage: string
}

export function SiteCardGrid({ items, whatsappMessage }: SiteCardGridProps) {
  return (
    <GridWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
        {items.map((item) => (
          <div
            key={item.label}
            className="premium-card rounded-2xl overflow-hidden flex flex-col w-full max-w-[400px]"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/10] block group"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/95 via-[#0A1A2F]/30 to-transparent" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A1A2F]/60 backdrop-blur flex items-center justify-center border border-[#00D4FF]/30">
                <ExternalLink size={14} className="text-white" />
              </div>
              <p className="absolute bottom-3 left-3 right-3 text-sm font-bold text-white line-clamp-2 drop-shadow-lg">
                {item.label}
              </p>
            </a>
            <div className="relative z-10 p-3 flex gap-2 bg-[#0A1A2F]/80 backdrop-blur-sm border-t border-[#0B5FFF]/20">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn flex-1 py-2.5 px-3 flex items-center justify-center gap-2 text-sm text-[#25D366] font-semibold"
              >
                Ver Demo
              </a>
              <a
                href={buildWhatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)"
                }}
              >
                <FaWhatsapp size={14} />
                Solicitar
              </a>
            </div>
          </div>
        ))}
      </div>
    </GridWrapper>
  )
}
