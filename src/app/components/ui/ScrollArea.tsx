// ScrollArea.tsx
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollAreaProps = {
  children: ReactNode
  className?: string
}

export function ScrollArea({ children, className }: ScrollAreaProps) {
  return <div className={cn("scroll-area", className)}>{children}</div>
}
