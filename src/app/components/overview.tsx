"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Cell, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

// Example data for case overview
const caseData = [
  { name: "Open", value: 120, fill: "var(--color-open)" },
  { name: "Closed", value: 85, fill: "var(--color-closed)" },
  { name: "In Progress", value: 40, fill: "var(--color-in-progress)" },
  { name: "Pending", value: 30, fill: "var(--color-pending)" },
  { name: "Archived", value: 15, fill: "var(--color-archived)" },
]

export function CaseOverview() {
  const totalCases = React.useMemo(() => {
    return caseData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Case Overview - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative left-20">
          <PieChart width={1000} height={400}>
            <Pie
              data={caseData}
              cx={200}
              cy={200}
              innerRadius={100}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >
              {caseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          
                          fill="white" // Ensure the fill color is white
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCases.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-white"
                          fill="white"
                        >
                          Cases
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="left"
              wrapperStyle={{ paddingRight: 5 }}
              payload={caseData.map((entry) => ({
                value: entry.name,
                color: entry.fill,
              }))}
            />
          </PieChart>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing case statuses for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
