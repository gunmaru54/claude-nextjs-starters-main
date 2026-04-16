import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "로그인",
}

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">로그인</CardTitle>
        <CardDescription>계정에 로그인하여 서비스를 이용하세요.</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <LoginForm />
      </CardContent>

      <CardFooter className="justify-center text-sm text-muted-foreground">
        계정이 없으신가요?&nbsp;
        <Link href="/signup" className="font-medium text-foreground hover:underline">
          회원가입
        </Link>
      </CardFooter>
    </Card>
  )
}
