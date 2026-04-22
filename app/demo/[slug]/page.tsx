import { PageShell } from "@/components/page-shell"
import { SiteCardGrid, SiteCardItem } from "@/components/site-card-grid"
import { notFound } from "next/navigation"

interface CatData {
  title: string
  message: string
  items: SiteCardItem[]
}

const data: Record<string, CatData> = {
  salao: {
    title: "Salão de Beleza",
    message: "Gostaria de solicitar esse modelo para meu salão de beleza",
    items: [{ label: "BioSite Salão de Beleza", href: "https://site-bio-instagram.vercel.app/", image: "/images/niches/salao.jpg" }],
  },
  barbeiro: {
    title: "Barbeiro",
    message: "Gostaria de solicitar esse modelo para minha barbearia",
    items: [{ label: "BioSite Barbeiro", href: "https://bio-barber.vercel.app/", image: "/images/niches/barbeiro.jpg" }],
  },
  nail: {
    title: "Nail Design",
    message: "Gostaria de solicitar esse modelo para meu espaço de unhas",
    items: [
      { label: "BioSite Nail Design", href: "https://bio-estetica.vercel.app/", image: "/images/niches/nail.jpg" },
      { label: "Catálogo Simples Nail", href: "https://catalogo-simples-nail.lovable.app", image: "/images/niches/nail.jpg" },
    ],
  },
  estetica: {
    title: "Estética",
    message: "Gostaria de solicitar esse modelo para meu espaço de estética",
    items: [{ label: "BioSite Estética", href: "https://biolink-esteticat.vercel.app/", image: "/images/niches/estetica.jpg" }],
  },
  automotiva: {
    title: "Estética Automotiva",
    message: "Gostaria de solicitar esse modelo para minha estética automotiva",
    items: [{ label: "BioSite Estética Automotiva", href: "https://estetica-auto-phi.vercel.app/", image: "/images/niches/automotiva.jpg" }],
  },
  doces: {
    title: "Doces",
    message: "Gostaria de solicitar esse modelo para minha confeitaria",
    items: [{ label: "Catálogo Doces", href: "https://catalogo-doces.lovable.app/", image: "/images/niches/doces.jpg" }],
  },
}

interface DemoCategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function DemoCategoryPage({ params }: DemoCategoryPageProps) {
  const { slug } = await params
  const cat = data[slug]
  
  if (!cat) {
    notFound()
  }

  return (
    <PageShell title={cat.title} subtitle="Toque para abrir a demo">
      <SiteCardGrid items={cat.items} whatsappMessage={cat.message} />
    </PageShell>
  )
}

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }))
}
