'use client'

import { useSearchParams, useRouter } from "next/navigation"

export default function DetailLink() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const message = searchParams.get('message')

    return (
        <div>
            <div className="titleBG">
                <h1 className="title">회원가입이 완료되지 않았습니다.</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h4>에러 메시지</h4>
                    <p>{message}</p>
                    <button className="generalBtn" onClick={router.back}>돌아가기</button>
                </div>
            </div>

        </div>
    )
}