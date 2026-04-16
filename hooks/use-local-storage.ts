"use client"

import { useState, useEffect } from "react"

// SSR 안전한 로컬 스토리지 훅
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // SSR에서는 initialValue로 시작
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // 클라이언트에서만 로컬 스토리지 값 읽기
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item) as T)
      }
    } catch {
      // 로컬 스토리지 접근 실패 시 초기값 유지
    }
  }, [key])

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      // 저장 실패 시 상태만 업데이트
    }
  }

  return [storedValue, setValue]
}
