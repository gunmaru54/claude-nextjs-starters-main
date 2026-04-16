import Link from "next/link"

// 사이트 하단 푸터
export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* 브랜드 */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="text-primary">⚡</span>
              <span>스타터킷</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              모던 웹 개발을 빠르게 시작할 수 있는 Next.js 스타터킷입니다.
            </p>
          </div>

          {/* 제품 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">제품</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  기능 소개
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  대시보드
                </Link>
              </li>
            </ul>
          </div>

          {/* 개발자 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">개발자</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Next.js 문서
                </Link>
              </li>
              <li>
                <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  shadcn/ui
                </Link>
              </li>
            </ul>
          </div>

          {/* 계정 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">계정</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  로그인
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 스타터킷. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
