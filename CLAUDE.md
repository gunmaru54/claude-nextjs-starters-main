@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

테스트 설정은 없습니다.

## 아키텍처 개요

Next.js 16 App Router 기반 스타터킷입니다. Route Group으로 레이아웃을 분리하는 구조입니다.

### 라우팅 구조

```
app/
├── layout.tsx              # 루트: ThemeProvider + TooltipProvider 전역 래핑
├── page.tsx                # 랜딩 페이지 (Hero, Features, CTA 섹션 조합)
├── (auth)/                 # 인증 Route Group — 중앙 정렬 레이아웃
│   ├── login/page.tsx
│   └── signup/page.tsx
└── (dashboard)/            # 대시보드 Route Group — Sidebar + 상단 헤더 레이아웃
    └── dashboard/
        ├── page.tsx        # 개요 (통계 카드 + 탭)
        └── analytics/page.tsx
```

사이드바에 메뉴를 추가할 때는 `components/layout/sidebar.tsx`의 `sidebarItems` 배열에 항목을 추가하고, 대응하는 `app/(dashboard)/dashboard/<경로>/page.tsx` 파일을 함께 생성해야 합니다.

### 컴포넌트 계층

- `components/ui/` — shadcn/ui 기반 기본 UI (Button, Card, Badge, Tabs 등)
- `components/layout/` — Sidebar, Header, Footer, MobileNav
- `components/sections/` — 랜딩 페이지 섹션 (Hero, Features, CTA)
- `components/providers/` — ThemeProvider (next-themes)

### 타입

공유 타입은 `types/index.ts`에 정의합니다. 현재 `NavItem`, `User`, `DashboardStats`가 있습니다.

### 유틸리티

`lib/utils.ts`의 `cn()` 함수로 Tailwind 클래스를 조합합니다 (clsx + tailwind-merge).

### 다크모드

`next-themes`로 구현되어 있으며, `ThemeProvider`가 루트 레이아웃에서 `attribute="class"`로 설정됩니다. `<html>` 태그에 `suppressHydrationWarning`이 필요합니다.

### 메타데이터

루트 레이아웃에서 `title.template: "%s | Next.js 스타터킷"`으로 설정되어 있어, 각 페이지에서 `export const metadata: Metadata = { title: "페이지명" }`만 선언하면 됩니다.
