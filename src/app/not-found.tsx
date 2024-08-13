import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link href="/" className="home-button">
        홈으로 돌아가기
      </Link>
    </div>
  )
}