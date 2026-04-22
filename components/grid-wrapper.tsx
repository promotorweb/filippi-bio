import { ReactNode } from "react"

interface GridWrapperProps {
  children: ReactNode
  className?: string
}

export function GridWrapper({ children, className = "" }: GridWrapperProps) {
  return (
    <div className={`w-full h-full overflow-auto ${className}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-6">
        {children}
      </div>
    </div>
  )
}
