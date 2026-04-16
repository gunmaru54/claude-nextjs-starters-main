import type { Metadata } from "next"
import {
  BarChart2Icon,
  UsersIcon,
  MousePointerClickIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MonitorIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { DashboardStats } from "@/types"

export const metadata: Metadata = {
  title: "분석",
}

// 분석 핵심 지표
const analyticsStats: DashboardStats[] = [
  { label: "총 페이지뷰", value: "128,450", change: "+12.3%", trend: "up" },
  { label: "순 방문자 수", value: "34,210", change: "+8.1%", trend: "up" },
  { label: "이탈률", value: "42.5%", change: "-3.2%", trend: "up" },
  { label: "평균 세션 시간", value: "3분 24초", change: "+0.8%", trend: "up" },
]

const statsIcons = [BarChart2Icon, UsersIcon, MousePointerClickIcon, ClockIcon]

// 채널별 유입 데이터
const trafficSources = [
  { channel: "자연 검색", visits: 14320, rate: "41.9%", change: "+5.2%", trend: "up" as const },
  { channel: "직접 유입", visits: 8910, rate: "26.0%", change: "+1.1%", trend: "up" as const },
  { channel: "소셜 미디어", visits: 5640, rate: "16.5%", change: "-2.4%", trend: "down" as const },
  { channel: "추천 링크", visits: 3280, rate: "9.6%", change: "+3.8%", trend: "up" as const },
  { channel: "이메일", visits: 2060, rate: "6.0%", change: "-0.9%", trend: "down" as const },
]

// 기기별 접속 비율
const deviceStats = [
  { device: "데스크탑", icon: MonitorIcon, rate: 54, count: "18,473" },
  { device: "모바일", icon: SmartphoneIcon, rate: 38, count: "13,000" },
  { device: "태블릿", icon: TabletIcon, rate: 8, count: "2,737" },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* 페이지 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">분석</h1>
          <p className="text-sm text-muted-foreground">
            트래픽 및 사용자 행동 데이터를 확인하세요.
          </p>
        </div>
        <Badge variant="secondary">2026년 4월</Badge>
      </div>

      {/* 핵심 지표 카드 */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsStats.map((stat, index) => {
          const Icon = statsIcons[index]
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
                  {stat.trend === "up" ? (
                    <ArrowUpIcon className="size-3 text-emerald-500" />
                  ) : (
                    <ArrowDownIcon className="size-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-emerald-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">지난달 대비</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 하단 섹션: 채널별 트래픽 + 기기별 비율 */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* 채널별 트래픽 분석 */}
        <Card>
          <CardHeader>
            <CardTitle>채널별 유입 경로</CardTitle>
            <CardDescription>이번 달 트래픽 소스 분석</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {trafficSources.map((source) => (
              <div key={source.channel} className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{source.channel}</span>
                  <span className="text-xs text-muted-foreground">
                    {source.visits.toLocaleString()}회 방문
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm tabular-nums">{source.rate}</span>
                  <div className="flex items-center gap-0.5 text-xs">
                    {source.trend === "up" ? (
                      <ArrowUpIcon className="size-3 text-emerald-500" />
                    ) : (
                      <ArrowDownIcon className="size-3 text-red-500" />
                    )}
                    <span className={source.trend === "up" ? "text-emerald-500" : "text-red-500"}>
                      {source.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 기기별 접속 비율 */}
        <Card>
          <CardHeader>
            <CardTitle>기기별 접속 비율</CardTitle>
            <CardDescription>방문자 접속 기기 현황</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {deviceStats.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.device} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-muted-foreground" />
                      <span className="font-medium">{item.device}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{item.count}명</span>
                      <span className="tabular-nums font-medium">{item.rate}%</span>
                    </div>
                  </div>
                  {/* 진행 바 */}
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/80 transition-all"
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
