import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="titleBG">
                <h1 className="title">회원가입 페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h2>회원 종류를 선택하세요.</h2>
                    <div className="registerSelectBox">
                        <Link className="registerSelectBtn" href='/register/admin'>점주</Link>
                        <Link className="registerSelectBtn" href='/register/client'>고객</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}