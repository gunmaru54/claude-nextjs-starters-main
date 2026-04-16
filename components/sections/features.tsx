import {
  MoonIcon,
  SmartphoneIcon,
  LayoutDashboardIcon,
  ShieldIcon,
  PaletteIcon,
  ZapIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    icon: MoonIcon,
    title: "다크 모드",
    description: "next-themes 기반 라이트/다크/시스템 테마 자동 전환을 지원합니다.",
  },
  {
    icon: SmartphoneIcon,
    title: "완전한 반응형",
    description: "모바일부터 데스크탑까지 모든 화면에서 최적화된 레이아웃을 제공합니다.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "대시보드 레이아웃",
    description: "사이드바 네비게이션과 통계 카드가 포함된 대시보드 레이아웃이 포함되어 있습니다.",
  },
  {
    icon: ShieldIcon,
    title: "인증 페이지",
    description: "로그인과 회원가입 폼이 완성된 UI로 제공됩니다. 인증 로직만 연결하면 됩니다.",
  },
  {
    icon: PaletteIcon,
    title: "shadcn/ui 컴포넌트",
    description: "Card, Button, Input, Badge, Avatar 등 30개 이상의 컴포넌트가 준비되어 있습니다.",
  },
  {
    icon: ZapIcon,
    title: "TypeScript 완전 지원",
    description: "strict 모드 TypeScript와 공통 타입 정의로 타입 안전한 개발 환경을 제공합니다.",
  },
]

// 기능 소개 섹션
export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            모든 것이 준비되어 있습니다
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            처음부터 구성하는 시간을 아끼고 핵심 비즈니스 로직에 집중하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
