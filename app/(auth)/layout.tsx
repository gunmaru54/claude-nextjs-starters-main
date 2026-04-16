import Link from "next/link"

// 인증 페이지 공통 레이아웃 (중앙 정렬)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 로고 */}
      <header className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary">⚡</span>
          <span>스타터킷</span>
        </Link>
      </header>

      {/* 컨텐츠 중앙 정렬 */}
      <main className="flex flex-1 items-center justify-center bg-muted/30 px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  )
}
