"use client"

import { Scissors, User, Sparkles, Heart, Car, Cake } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { CardGrid } from "@/components/card-grid"

export default function DemonstracaoPage() {
  const items = [
    { label: "Salão de Beleza", to: "/demo/salao", icon: Scissors, image: "/images/niches/salao.jpg" },
    { label: "Barbeiro", to: "/demo/barbeiro", icon: User, image: "/images/niches/barbeiro.jpg" },
    { label: "Nail Design", to: "/demo/nail", icon: Sparkles, image: "/images/niches/nail.jpg" },
    { label: "Estética", to: "/demo/estetica", icon: Heart, image: "/images/niches/estetica.jpg" },
    { label: "Estética Automotiva", to: "/demo/automotiva", icon: Car, image: "/images/niches/automotiva.jpg" },
    { label: "Doces", to: "/demo/doces", icon: Cake, image: "/images/niches/doces.jpg" },
  ]

  return (
    <PageShell title="Demonstração" subtitle="Escolha uma categoria para ver as demonstrações">
      <CardGrid items={items} />
    </PageShell>
  )
}
