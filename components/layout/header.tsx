import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import type { NavItem } from "@/types"

const navItems: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "대시보드", href: "/dashboard" },
  { title: "소개", href: "/#features" },
]

// 상단 네비게이션 헤더
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary">⚡</span>
          <span>스타터킷</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              시작하기
            </Link>
          </div>
          {/* 모바일 메뉴 */}
          <div className="md:hidden">
            <MobileNav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  )
}
