import type { Metadata } from "next"
import {
  TrendingUpIcon,
  UsersIcon,
  DollarSignIcon,
  ActivityIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import type { DashboardStats } from "@/types"

export const metadata: Metadata = {
  title: "대시보드",
}

const stats: DashboardStats[] = [
  { label: "총 수익", value: "₩4,231,000", change: "+20.1%", trend: "up" },
  { label: "활성 사용자", value: "2,350", change: "+180", trend: "up" },
  { label: "신규 가입", value: "1,247", change: "-3%", trend: "down" },
  { label: "전환율", value: "12.5%", change: "+4.1%", trend: "up" },
]

const statsIcons = [DollarSignIcon, UsersIcon, TrendingUpIcon, ActivityIcon]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* 페이지 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
          <p className="text-sm text-muted-foreground">서비스 현황을 한눈에 확인하세요.</p>
        </div>
        <Badge variant="secondary">2026년 4월</Badge>
      </div>

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
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

      {/* 탭 콘텐츠 */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="analytics">분석</TabsTrigger>
          <TabsTrigger value="reports">보고서</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* 차트 플레이스홀더 */}
            <Card>
              <CardHeader>
                <CardTitle>수익 추이</CardTitle>
                <CardDescription>최근 6개월간 월별 수익</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-48 flex-col gap-2 justify-end">
                  <div className="flex items-end gap-2 h-40">
                    {[40, 65, 55, 80, 72, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-primary/80 transition-all"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    {["11월", "12월", "1월", "2월", "3월", "4월"].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 최근 활동 */}
            <Card>
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
                <CardDescription>최근 가입한 사용자</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {[
                  { name: "김철수", email: "chul@example.com", time: "2분 전" },
                  { name: "이영희", email: "young@example.com", time: "15분 전" },
                  { name: "박민수", email: "min@example.com", time: "1시간 전" },
                  { name: "최지우", email: "jiwoo@example.com", time: "3시간 전" },
                ].map((user) => (
                  <div key={user.email} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{user.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>분석</CardTitle>
              <CardDescription>분석 데이터를 여기에 표시합니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>보고서</CardTitle>
              <CardDescription>보고서 데이터를 여기에 표시합니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
