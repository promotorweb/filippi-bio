"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"

const socialProofData = [
  { name: "Mariana Silva", image: "https://i.pravatar.cc/80?img=1" },
  { name: "Carlos Souza", image: "https://i.pravatar.cc/80?img=3" },
  { name: "Ana Costa", image: "https://i.pravatar.cc/80?img=5" },
  { name: "Pedro Oliveira", image: "https://i.pravatar.cc/80?img=7" },
  { name: "Julia Santos", image: "https://i.pravatar.cc/80?img=9" },
  { name: "Lucas Ferreira", image: "https://i.pravatar.cc/80?img=11" },
  { name: "Beatriz Lima", image: "https://i.pravatar.cc/80?img=13" },
  { name: "Rafael Mendes", image: "https://i.pravatar.cc/80?img=15" },
  { name: "Camila Rocha", image: "https://i.pravatar.cc/80?img=17" },
  { name: "Thiago Alves", image: "https://i.pravatar.cc/80?img=19" },
]

// Timing constants
const FADE_DURATION = 500 // 0.5s
const VISIBLE_DURATION = 5000 // 5s
const HIDDEN_INTERVAL = 10000 // 10s
const INITIAL_DELAY = 5000 // 5s

export function SocialProofPopup() {
  // Estado para controlar visibilidade
  const [isVisible, setIsVisible] = useState(false)
  
  // Estado separado para a pessoa atual - só muda quando card está oculto
  const [currentPerson, setCurrentPerson] = useState(socialProofData[0])
  
  // Ref para tracking do índice (evita re-renders desnecessários)
  const indexRef = useRef(0)
  
  // Ref para controlar se componente está montado
  const isMountedRef = useRef(true)

  const getNextPerson = useCallback(() => {
    indexRef.current = (indexRef.current + 1) % socialProofData.length
    return socialProofData[indexRef.current]
  }, [])

  useEffect(() => {
    isMountedRef.current = true
    
    const runCycle = () => {
      if (!isMountedRef.current) return

      // 1. Fade-in
      setIsVisible(true)

      // 2. Após 5s visível, fade-out
      setTimeout(() => {
        if (!isMountedRef.current) return
        setIsVisible(false)

        // 3. Após fade-out completo (0.5s), trocar pessoa e agendar próximo ciclo
        setTimeout(() => {
          if (!isMountedRef.current) return
          // Troca a pessoa APENAS quando card está totalmente oculto
          setCurrentPerson(getNextPerson())

          // 4. Esperar 10s com tela limpa antes do próximo ciclo
          setTimeout(() => {
            if (!isMountedRef.current) return
            runCycle()
          }, HIDDEN_INTERVAL)
        }, FADE_DURATION)
      }, VISIBLE_DURATION)
    }

    // Delay inicial de 5s antes do primeiro card
    const initialTimer = setTimeout(runCycle, INITIAL_DELAY)

    return () => {
      isMountedRef.current = false
      clearTimeout(initialTimer)
    }
  }, [getNextPerson])

  const displayName = currentPerson?.name || "Cliente"

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 transition-all ease-out ${
        isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 -translate-x-5 pointer-events-none"
      }`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
      aria-live="polite"
    >
      <div className="flex items-center gap-3 p-3 pr-4 rounded-xl bg-white shadow-lg shadow-black/10 border border-gray-100 min-w-[200px] max-w-[260px]">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-100">
          <Image
            src={currentPerson?.image || "https://i.pravatar.cc/80?img=1"}
            alt={displayName}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Texto */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm text-gray-900 truncate">
              {displayName}
            </span>
            <FaInstagram size={14} className="text-pink-500 shrink-0" />
          </div>
          <p className="text-xs text-gray-600 mt-0.5">acabou de adquirir</p>
        </div>
      </div>
    </div>
  )
}
