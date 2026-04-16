import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// 하단 CTA 섹션
export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="max-w-xl text-primary-foreground/80">
            설정에 시간을 낭비하지 마세요. 스타터킷을 포크하고
            바로 여러분의 아이디어를 구현하세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              무료로 시작하기
              <ArrowRightIcon className="ml-1 size-4" />
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              데모 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
