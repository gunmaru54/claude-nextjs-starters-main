import { Skeleton } from "@/components/ui/skeleton"

// 전역 로딩 UI (페이지 전환 시 표시)
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 스켈레톤 */}
      <div className="flex h-14 items-center justify-between border-b px-4">
        <Skeleton className="h-6 w-24" />
        <div className="hidden md:flex items-center gap-6">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="size-8 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      </div>

      {/* 콘텐츠 스켈레톤 */}
      <main className="flex-1 container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Skeleton className="h-6 w-48 rounded-full" />
          <Skeleton className="h-12 w-96 max-w-full" />
          <Skeleton className="h-6 w-80 max-w-full" />
          <div className="flex gap-3">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-28 rounded-md" />
          </div>
        </div>
      </main>
    </div>
  )
}
