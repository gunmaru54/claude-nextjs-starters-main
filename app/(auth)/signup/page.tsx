import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SignupForm } from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "회원가입",
}

export default function SignupPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">회원가입</CardTitle>
        <CardDescription>새 계정을 만들어 서비스를 시작하세요</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <SignupForm />
      </CardContent>

      <CardFooter className="justify-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?&nbsp;
        <Link href="/login" className="font-medium text-foreground hover:underline">
          로그인
        </Link>
      </CardFooter>
    </Card>
  )
}
