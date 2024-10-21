'use client'

import { signIn } from 'next-auth/react'

export default function LoginBtn() {
    return (
        <button className="generalBtn" onClick={ () => {signIn()} } style={{marginLeft:'10px'}}>로그인</button>
    )
}