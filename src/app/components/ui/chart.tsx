import React from "react"
import { TooltipProps } from "recharts"

// Configuration type for charts
export interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

// Container for the chart
export const ChartContainer: React.FC<{ config: ChartConfig; className?: string; children?: React.ReactNode }> = ({
  config,
  className,
  children,
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}

// Custom Tooltip for the chart
export const ChartTooltip: React.FC<TooltipProps<any, any>> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const item = payload[0]
    return (
      <div className="bg-white border border-gray-300 rounded p-2 shadow-lg">
        <p className="text-sm font-semibold">{item.name}</p>
        <p className="text-xs text-gray-600">{item.value}</p>
      </div>
    )
  }

  return null
}

// Content for the Tooltip
export const ChartTooltipContent: React.FC<{ hideLabel?: boolean; children?: React.ReactNode }> = ({
  hideLabel,
  children,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded p-2 shadow-lg">
      {!hideLabel && <p className="text-sm font-semibold">Label:</p>}
      <div className="text-xs text-gray-600">{children}</div>
    </div>
  )
}
