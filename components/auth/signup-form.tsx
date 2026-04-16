"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GoogleSignInButton } from "@/components/ui/google-sign-in-button"
import { signupSchema, type SignupFormValues } from "@/lib/validations/auth"

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  return (
    <>
      {/* 소셜 가입 */}
      <div className="flex flex-col gap-3">
        <GoogleSignInButton action="가입" />
      </div>

      <div className="relative flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">또는</span>
        <Separator className="flex-1" />
      </div>

      {/* 회원가입 폼 — TODO: handleSubmit 콜백에 회원가입 로직 연결 */}
      <form
        onSubmit={handleSubmit(() => {})}
        className="flex flex-col gap-4"
        noValidate
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName">이름</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="홍"
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              {...register("firstName")}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-xs text-destructive" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="lastName">성</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="길동"
              autoComplete="family-name"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-xs text-destructive" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="hello@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="영문+숫자 8자 이상"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            {...register("password")}
          />
          {errors.password && (
            <p id="password-error" className="text-xs text-destructive" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            autoComplete="new-password"
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p id="confirmPassword-error" className="text-xs text-destructive" role="alert">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "처리 중..." : "계정 만들기"}
        </Button>
      </form>
    </>
  )
}
