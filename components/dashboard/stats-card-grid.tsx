import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { DashboardStats } from "@/types"

interface StatsCardGridProps {
  stats: DashboardStats[]
  icons: LucideIcon[]
}

// trend 값에 따른 아이콘 및 색상 표시 컴포넌트
function TrendIndicator({
  trend,
  change,
}: {
  trend?: DashboardStats["trend"]
  change?: string
}) {
  if (trend === "up") {
    return (
      <>
        <ArrowUpIcon className="size-3 text-emerald-500" />
        <span className="text-emerald-500">{change}</span>
      </>
    )
  }
  if (trend === "down") {
    return (
      <>
        <ArrowDownIcon className="size-3 text-red-500" />
        <span className="text-red-500">{change}</span>
      </>
    )
  }
  // neutral 또는 trend 미지정 처리
  return <span className="text-muted-foreground">{change}</span>
}

// 대시보드 통계 카드 그리드 공유 컴포넌트
export function StatsCardGrid({ stats, icons }: StatsCardGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = icons[index]
        return (
          <Card key={stat.label}>
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardDescription>{stat.label}</CardDescription>
                <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                  <Icon className="size-4 text-muted-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl tabular-nums">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent className="pt-3">
              <div className="flex items-center gap-1 text-xs">
                <TrendIndicator trend={stat.trend} change={stat.change} />
                <span className="text-muted-foreground">지난달 대비</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
