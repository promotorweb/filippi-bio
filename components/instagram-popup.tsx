"use client"

import { useEffect } from "react"
import { FaInstagram } from "react-icons/fa"
import { INSTAGRAM_URL } from "@/lib/contact"

interface InstagramPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function InstagramPopup({ isOpen, onClose }: InstagramPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        window.open(INSTAGRAM_URL, "_blank")
        onClose()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="instagram-popup" onClick={onClose}>
      <div 
        className="instagram-popup-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="instagram-icon-ring">
          <FaInstagram size={36} className="text-white" />
        </div>
        
        <h2 className="text-xl font-bold text-white">
          Não se esqueça de seguir!
        </h2>
        
        <div className="text-5xl">
          🫶
        </div>
        
        <p className="text-sm text-muted-foreground">
          Carregando...
        </p>
        
        <div className="progress-bar w-full">
          <div className="progress-bar-fill" />
        </div>
        
        <p className="text-xs text-muted-foreground">
          Você será redirecionado para o Instagram<br />
          <span className="text-accent font-medium">@filippi.agenda</span>
        </p>
      </div>
    </div>
  )
}
