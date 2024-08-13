'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 에러 로깅 서비스에 에러를 보고할 수 있습니다
    console.error(error)
  }, [error])

  return (
    <div className="error-container">
      <h2>문제가 발생했습니다!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="reset-button"
      >
        다시 시도하기
      </button>
    </div>
  )
}