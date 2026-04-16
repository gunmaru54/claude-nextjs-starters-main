"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, HomeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { sidebarItems } from "@/components/layout/sidebar"

// 모바일 전용 사이드바 드로어 컴포넌트
export function MobileSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="메뉴 열기" />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold"
              onClick={() => setOpen(false)}
            >
              <span className="text-primary">⚡</span>
              <span>스타터킷</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* 네비게이션 링크 */}
        <nav className="flex flex-col gap-1 p-3">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                <Icon className="size-4 shrink-0" />
                {item.title}
              </Link>
            )
          })}
        </nav>

        {/* 하단 홈 링크 */}
        <div className="mt-auto border-t p-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground/60 hover:bg-muted hover:text-foreground transition-colors"
            onClick={() => setOpen(false)}
          >
            <HomeIcon className="size-4 shrink-0" />
            홈으로
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
