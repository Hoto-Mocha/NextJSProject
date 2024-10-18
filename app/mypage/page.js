export default function MyPage() {
    let session = { id: 'hong', pw: '1234', name: '홍길동', tel: '01012341234', shopTel: '' }
    return (
        <div>
            <div className="titleBG">
                <h1 className="title">마이페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h2>마이페이지</h2>
                    <form className="registerForm" action="">
                        <h3>아이디</h3>
                        <input className="registerInput" placeholder="ID..." value={session.id}></input>
                        <h3>비밀번호</h3>
                        <input type="password" className="registerInput" placeholder="PW..."></input>
                        <h3>비밀번호 확인</h3>
                        <input type="password" className="registerInput" placeholder="PW 확인..."></input>
                        <h3>성명</h3>
                        <input className="registerInput" placeholder="이름..." value={session.name}></input>
                        <h3>전화번호</h3>
                        <input type="tel" maxlength="11" className="registerTelInput" value={session.tel}></input>
                        {
                            session.shopTel ? <>
                                <h3>매장 대표 전화번호</h3>
                                <input type="tel" maxlength="11" className="registerTelInput" value={session.shopTel}></input>
                            </> : <></>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}