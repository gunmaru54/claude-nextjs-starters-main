"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboardIcon,
  UsersIcon,
  SettingsIcon,
  BarChart2Icon,
  HomeIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarNavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const sidebarItems: SidebarNavItem[] = [
  { title: "대시보드", href: "/dashboard", icon: LayoutDashboardIcon },
  { title: "분석", href: "/dashboard/analytics", icon: BarChart2Icon },
  { title: "사용자", href: "/dashboard/users", icon: UsersIcon },
  { title: "설정", href: "/dashboard/settings", icon: SettingsIcon },
]

// 대시보드 사이드바 네비게이션
export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-60 flex-col border-r bg-muted/30 min-h-full">
      {/* 로고 */}
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-primary">⚡</span>
          <span>스타터킷</span>
        </Link>
      </div>

      {/* 네비게이션 */}
      <nav className="flex flex-col gap-1 p-3 flex-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              {item.title}
            </Link>
          )
        })}
      </nav>

      {/* 하단 홈 링크 */}
      <div className="border-t p-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground/60 hover:bg-muted hover:text-foreground transition-colors"
        >
          <HomeIcon className="size-4 shrink-0" />
          홈으로
        </Link>
      </div>
    </aside>
  )
}
