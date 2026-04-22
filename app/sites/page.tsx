"use client"

import { Scissors, Pizza, Beef, Sparkles, Crown, Eye, Palette, Wrench, Briefcase } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { CardGrid } from "@/components/card-grid"

export default function SitesPage() {
  const items = [
    { label: "Barbearias", to: "/sites/barbearias", icon: Scissors, image: "/images/niches/barbearia.jpg" },
    { label: "Pizzarias", to: "/sites/pizzarias", icon: Pizza, image: "/images/niches/pizzaria.jpg" },
    { label: "Hamburguerias", to: "/sites/hamburguerias", icon: Beef, image: "/images/niches/hamburgueria.jpg" },
    { label: "Nail Designer", to: "/sites/nail", icon: Sparkles, image: "/images/niches/nail.jpg" },
    { label: "Salão de Beleza", to: "/sites/salao", icon: Crown, image: "/images/niches/salao.jpg" },
    { label: "Sobrancelhas / Cílios", to: "/sites/sobrancelhas", icon: Eye, image: "/images/niches/sobrancelhas.jpg" },
    { label: "Tatuadores", to: "/sites/tatuadores", icon: Palette, image: "/images/niches/tatuador.jpg" },
    { label: "Serviços Gerais", to: "/sites/servicos", icon: Wrench, image: "/images/niches/servicos.jpg" },
    { label: "Profissionais", to: "/sites/profissionais", icon: Briefcase, image: "/images/niches/profissionais.jpg" },
  ]

  return (
    <PageShell title="Sites" subtitle="Escolha uma categoria de site">
      <CardGrid items={items} />
    </PageShell>
  )
}
