import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="titleBG">
                <h1 className="title">고객 회원 가입 페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h2>회원 정보</h2>
                    <form className="registerForm" action="/api/auth/member" method="POST">
                        <input type="hidden" name="type" defaultValue='CLIENT'/>
                        <h3>아이디</h3>
                        <input name="id" className="registerInput" placeholder="ID..."></input>
                        <h3>비밀번호</h3>
                        <input name="pw" type="password" className="registerInput" placeholder="PW..."></input>
                        <h3>전화번호</h3>
                        <input name="tel" type="tel" maxLength="11" className="registerTelInput"></input>
                        <h3>성명</h3>
                        <input name="name" className="registerInput" placeholder="이름..."></input>

                        <button type="submit" className="generalBtn">가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
}