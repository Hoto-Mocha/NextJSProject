"use client";

import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 14에서 변경된 부분

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // signOut 호출 후 리다이렉트
        signOut({ callbackUrl: '/' }) // 로그아웃 후 '/' 페이지로 리다이렉트
            .then(() => {
                router.push('/'); // 추가적인 리다이렉트
            });
    }, []);

    return (
        <div>
            <div className='titleBG'>
                <h1 className='title'>마이페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h4>수정 완료</h4>
                    <p>수정 완료. 로그아웃 중...</p>
                </div>
            </div>
        </div>
    );
}
