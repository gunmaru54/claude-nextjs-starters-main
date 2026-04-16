// 네비게이션 아이템 타입
export interface NavItem {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
  icon?: string
}

// 사용자 타입
export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: "admin" | "user"
}

// 대시보드 통계 타입
export interface DashboardStats {
  label: string
  value: string | number
  change?: string
  trend?: "up" | "down" | "neutral"
}
