"use client"

import { ExternalLink, LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GridWrapper } from "./grid-wrapper"

export interface CardItem {
  label: string
  href?: string
  to?: string
  icon?: LucideIcon
  external?: boolean
  image?: string
}

interface CardGridProps {
  items: CardItem[]
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <GridWrapper>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
        {items.map((item) => {
          const Icon = item.icon
          const content = (
            <>
              {item.image && (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/95 via-[#0A1A2F]/55 to-[#0A1A2F]/20" />
              <div className="relative z-10 h-full flex flex-col justify-between p-3">
                <div className="flex items-center justify-between">
                  {Icon ? (
                    <div 
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shadow-md backdrop-blur border border-[#00D4FF]/30"
                      style={{ background: "linear-gradient(135deg, #0B5FFF, #7B2FFF)" }}
                    >
                      <Icon size={16} className="text-white sm:hidden" />
                      <Icon size={18} className="text-white hidden sm:block" />
                    </div>
                  ) : <span />}
                  {item.external && <ExternalLink size={14} className="text-white/80" />}
                </div>
                <p className="text-xs sm:text-sm font-bold leading-tight text-white line-clamp-2 drop-shadow-md">
                  {item.label}
                </p>
              </div>
            </>
          )
          
          const className = "premium-card group relative aspect-square rounded-2xl overflow-hidden cursor-pointer w-full max-w-[180px] sm:max-w-[200px]"
          
          if (item.href) {
            return (
              <a 
                key={item.label} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={className}
              >
                {content}
              </a>
            )
          }
          
          return (
            <Link
              key={item.label}
              href={item.to || "/"}
              className={`${className} text-left`}
            >
              {content}
            </Link>
          )
        })}
      </div>
    </GridWrapper>
  )
}
