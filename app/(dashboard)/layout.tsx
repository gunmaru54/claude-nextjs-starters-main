import { Sidebar } from "@/components/layout/sidebar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

// 대시보드 레이아웃 (사이드바 + 메인 콘텐츠)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* 모바일 헤더 */}
        <header className="flex h-14 items-center justify-between border-b px-4 md:hidden">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-primary">⚡</span>
            <span>스타터킷</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="메뉴">
              <MenuIcon className="size-5" />
            </Button>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
