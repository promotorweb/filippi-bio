import { PageShell } from "@/components/page-shell"
import { SiteCardGrid, SiteCardItem } from "@/components/site-card-grid"
import { notFound } from "next/navigation"

const mk = (label: string, href: string, image: string): SiteCardItem => ({ label, href, image })

interface CatData {
  title: string
  message: string
  items: SiteCardItem[]
}

const data: Record<string, CatData> = {
  barbearias: {
    title: "Barbearias",
    message: "Gostaria de solicitar esse modelo para minha barbearia",
    items: [
      mk("Corte Premium", "https://cortes-premium-booking.lovable.app", "/images/niches/barbearia.jpg"),
      mk("Barbearia Premium", "https://regal-cuts-lounge.lovable.app", "/images/niches/barbearia.jpg"),
      mk("Barbearia Moderna", "https://neon-fade-studio.base44.app", "/images/niches/barbearia.jpg"),
      mk("Barbearia Clássica", "https://raiz-barber-hub.base44.app", "/images/niches/barbearia.jpg"),
      mk("Barbearia Noir", "https://noir-gentleman-cut.base44.app", "/images/niches/barbearia.jpg"),
      mk("Barbearia Favela", "https://rebel-cuts-co.lovable.app", "/images/niches/barbearia.jpg"),
      mk("Agendamento 1", "https://your-time-first.lovable.app", "/images/niches/barbearia.jpg"),
      mk("Agendamento 2", "https://transform-booking.lovable.app", "/images/niches/barbearia.jpg"),
      mk("Classic Premium", "https://polished-man-space.lovable.app", "/images/niches/barbearia.jpg"),
    ],
  },
  pizzarias: {
    title: "Pizzarias",
    message: "Gostaria de solicitar esse modelo para minha pizzaria",
    items: [
      mk("Pizzaria 1", "https://don-pizza-hunger-maker.lovable.app", "/images/niches/pizzaria.jpg"),
      mk("Pizzaria 2", "https://forno-italiano-arte.lovable.app", "/images/niches/pizzaria.jpg"),
      mk("Pizzaria 3", "https://direct-dish.lovable.app", "/images/niches/pizzaria.jpg"),
      mk("Pizzaria 4", "https://pixel-perfection-pizza.lovable.app", "/images/niches/pizzaria.jpg"),
      mk("Pizzaria 5", "https://pizza-rodizio-showcase.lovable.app", "/images/niches/pizzaria.jpg"),
      mk("Pizzaria 6", "https://click-a-pizza.lovable.app", "/images/niches/pizzaria.jpg"),
    ],
  },
  hamburguerias: {
    title: "Hamburguerias",
    message: "Gostaria de solicitar esse modelo para minha hamburgueria",
    items: [
      mk("Hamburgueria 1", "https://artisanal-burger-craft.lovable.app", "/images/niches/hamburgueria.jpg"),
      mk("Hamburgueria 2", "https://crave-quick-eats.lovable.app", "/images/niches/hamburgueria.jpg"),
      mk("Hamburgueria 3", "https://street-smash-burgers.lovable.app", "/images/niches/hamburgueria.jpg"),
      mk("Hamburgueria 4", "https://cozy-burger-corner.lovable.app", "/images/niches/hamburgueria.jpg"),
      mk("Hamburgueria 5", "https://burger-dash-deluxe.lovable.app", "/images/niches/hamburgueria.jpg"),
    ],
  },
  nail: {
    title: "Nail Designer",
    message: "Gostaria de solicitar esse modelo para meu espaço de unhas",
    items: [
      mk("Unhas 1", "https://glow-nails.lovable.app", "/images/niches/nail.jpg"),
      mk("Unhas 2", "https://vibe-nail-glow.lovable.app", "/images/niches/nail.jpg"),
      mk("Unhas 3", "https://aryele-sparkle-beauty.lovable.app", "/images/niches/nail.jpg"),
      mk("Unhas 4", "https://speedy-nail-spot.lovable.app", "/images/niches/nail.jpg"),
      mk("Unhas 5", "https://artful-nail-sparkle.lovable.app", "/images/niches/nail.jpg"),
      mk("Atelier Clat Nails", "https://atelier-clat-nails.vercel.app", "/images/niches/nail.jpg"),
      mk("Espaço Luna", "https://espaco-luna.lovable.app/", "/images/niches/nail.jpg"),
    ],
  },
  salao: {
    title: "Salão de Beleza",
    message: "Gostaria de solicitar esse modelo para meu salão de beleza",
    items: [
      mk("Maison Lise Beauty", "https://maison-lise-beauty.vercel.app", "/images/niches/salao.jpg"),
      mk("Salão 1", "https://elevate-your-glam.lovable.app", "/images/niches/salao.jpg"),
      mk("Salão 2", "https://bright-beauty-deals.lovable.app", "/images/niches/salao.jpg"),
      mk("Loiros", "https://blond-magic-show.lovable.app", "/images/niches/salao.jpg"),
      mk("Salão 3", "https://glam-journey.lovable.app", "/images/niches/salao.jpg"),
      mk("Minimalista", "https://chic-trim-spark.lovable.app", "/images/niches/salao.jpg"),
      mk("Salão 4", "https://beauty-book-direct.lovable.app", "/images/niches/salao.jpg"),
      mk("Salão 5", "https://chic-charm-maker.lovable.app", "/images/niches/salao.jpg"),
    ],
  },
  sobrancelhas: {
    title: "Sobrancelhas / Cílios",
    message: "Gostaria de solicitar esse modelo para meu estúdio de sobrancelhas",
    items: [
      mk("Sobrancelha 1", "https://brow-magic-atelier.lovable.app", "/images/niches/sobrancelhas.jpg"),
      mk("Sobrancelha 2", "https://subtle-beauty-enhancer.lovable.app", "/images/niches/sobrancelhas.jpg"),
      mk("Sobrancelha 3", "https://eye-define-magic.lovable.app", "/images/niches/sobrancelhas.jpg"),
      mk("Sobrancelha 4", "https://eye-fire-design.lovable.app", "/images/niches/sobrancelhas.jpg"),
      mk("Sobrancelha 5", "https://lash-fire-spark.lovable.app", "/images/niches/sobrancelhas.jpg"),
      mk("Sobrancelha 6", "https://lash-wonder-boost.lovable.app", "/images/niches/sobrancelhas.jpg"),
      mk("Cílios", "https://soft-lash-glow.lovable.app", "/images/niches/sobrancelhas.jpg"),
    ],
  },
  tatuadores: {
    title: "Tatuadores",
    message: "Gostaria de solicitar esse modelo para meu estúdio de tatuagem",
    items: [mk("Blackline Studio", "https://blackline-flow.vercel.app", "/images/niches/tatuador.jpg")],
  },
  servicos: {
    title: "Serviços Gerais",
    message: "Gostaria de solicitar esse modelo para meu negócio",
    items: [
      mk("Oficina Elétrica", "https://cyclone-spark-connect.lovable.app", "/images/niches/servicos.jpg"),
      mk("Limpeza", "https://casa-shine.lovable.app", "/images/niches/servicos.jpg"),
      mk("Estética Automotiva", "https://lava-glow-studio.lovable.app", "/images/niches/servicos.jpg"),
      mk("PetShop", "https://cuddle-creek-site.lovable.app", "/images/niches/servicos.jpg"),
      mk("Tranças", "https://tresses-of-goiania.lovable.app", "/images/niches/servicos.jpg"),
    ],
  },
  profissionais: {
    title: "Profissionais",
    message: "Gostaria de solicitar esse modelo para meu trabalho profissional",
    items: [
      mk("Dentista", "https://trust-dental-web.lovable.app", "/images/niches/profissionais.jpg"),
      mk("Advogado", "https://golden-law-studio.lovable.app", "/images/niches/profissionais.jpg"),
      mk("Fotógrafo", "https://portrait-elegance-hub.lovable.app", "/images/niches/profissionais.jpg"),
      mk("Doces", "https://divine-crumb-creations.lovable.app", "/images/niches/profissionais.jpg"),
      mk("Personal Trainer", "https://ignite-move-prosper.lovable.app", "/images/niches/profissionais.jpg"),
    ],
  },
}

interface SiteCategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function SiteCategoryPage({ params }: SiteCategoryPageProps) {
  const { slug } = await params
  const cat = data[slug]
  
  if (!cat) {
    notFound()
  }

  return (
    <PageShell title={cat.title} subtitle="Toque em um card para abrir">
      <SiteCardGrid items={cat.items} whatsappMessage={cat.message} />
    </PageShell>
  )
}

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }))
}
