import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">Pagina nao encontrada</h1>
      <Link href="/" className="mt-4 flex items-center gap-2">
        <Home size={18} />
        Voltar para o inicio
      </Link>
    </div>
  )
}
