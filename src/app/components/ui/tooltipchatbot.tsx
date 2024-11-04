// tooltipchatbot.tsx (or wherever your tooltipchatbot components are defined)
import { ReactNode } from "react"

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function Tooltip({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>
}

export function TooltipContent({
  children,
  side = "top",
  align = "center",
}: {
  children: ReactNode
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
}) {
  return (
    <div className={`tooltip-content tooltip-${side} tooltip-align-${align}`}>
      {children}
    </div>
  )
}
