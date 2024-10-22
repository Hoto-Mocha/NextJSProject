import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import LoginBtn from "../LoginBtn";

export default async function MyPage() {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <div className="titleBG">
                <h1 className="title">마이페이지</h1>
            </div>
            {session ? <div className="loginContainer" style={{ flexDirection: 'column' }}>
                <div className="registerBox">
                    <h2>마이페이지</h2>
                    <form className="registerForm" action="/api/auth/member" method="POST">
                        <input name="_method" type="hidden" defaultValue="PUT" />
                        {/* 세션 영역 */}
                        <input name="session_type" type="hidden" defaultValue={session.user.type} />
                        <input name="session_id" type="hidden" defaultValue={session.user.id} />
                        <input name="session_tel" type="hidden" defaultValue={session.user.tel} />
                        {/* 입력 영역 */}
                        <h3>아이디</h3>
                        <input name="id" className="registerInput" placeholder="ID..." defaultValue={session.user.id}></input>
                        <h3>비밀번호</h3>
                        <input name="pw" type="password" className="registerInput" placeholder="PW..."></input>
                        <h3>성명</h3>
                        <input name="name" className="registerInput" placeholder="이름..." defaultValue={session.user.name}></input>
                        <h3>전화번호</h3>
                        <input name="tel" type="tel" maxLength="11" className="registerTelInput" defaultValue={session.user.tel}></input>
                        <button type="submit" className="generalBtn">수정하기</button>
                    </form>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <form className="registerForm" action="/api/auth/member" method="POST">
                        <input name="_method" type="hidden" defaultValue="DELETE" />
                        <input name="session_type" type="hidden" defaultValue={session.user.type} />
                        <input name="session_id" type="hidden" defaultValue={session.user.id} />
                        <button type="submit" className="generalBtn">탈퇴하기</button>
                    </form>
                </div>
            </div> : <div className="loginContainer">
                <div className="registerBox">
                    <h2>로그인이 필요합니다.</h2>
                    <LoginBtn style={{marginLeft:0}}/>
                </div>
            </div>}
        </div>
    )
}