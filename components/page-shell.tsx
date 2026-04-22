import { ReactNode } from "react"
import { InternalHeader } from "./internal-header"

interface PageShellProps {
  title: string
  children: ReactNode
}

export function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="min-h-screen">
      <InternalHeader title={title} />
      <main>{children}</main>
    </div>
  )
}
