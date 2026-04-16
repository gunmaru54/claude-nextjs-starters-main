import Link from "next/link"
import { ArrowRightIcon, ZapIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// 랜딩 페이지 히어로 섹션
export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-24 px-4 text-center">
      <Badge variant="secondary" className="gap-1.5 px-3 py-1">
        <ZapIcon className="size-3" />
        Next.js 16 + Tailwind CSS 4 + shadcn/ui
      </Badge>

      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          모던 웹을{" "}
          <span className="text-primary">빠르게</span> 시작하세요
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          최신 기술 스택으로 구성된 프로덕션 레디 스타터킷.
          다크모드, 반응형 디자인, 인증 페이지, 대시보드가 모두 포함되어 있습니다.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/dashboard"
          className={cn(buttonVariants({ size: "lg" }))}
        >
          대시보드 보기
          <ArrowRightIcon className="ml-1 size-4" />
        </Link>
        <Link
          href="/#features"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          기능 살펴보기
        </Link>
      </div>

      {/* 기술 스택 뱃지 */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "lucide-react"].map(
          (tech) => (
            <span
              key={tech}
              className="rounded-full border bg-muted/50 px-2.5 py-1 font-mono"
            >
              {tech}
            </span>
          )
        )}
      </div>
    </section>
  )
}
