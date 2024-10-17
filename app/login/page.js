export default function Home() {
  return (
    <div>
      <div className="titleBG">
        <h1 className="title">로그인 페이지</h1>
      </div>
      <div className="loginContainer">
        <div className="loginBox">
          <h2>로그인 정보를 입력하세요.</h2>
          <form className="loginForm">
            <h3>아이디</h3>
            <input className="loginInput" placeholder="ID..."></input>
            <h3>비밀번호</h3>
            <input type="password" className="loginInput" placeholder="PW..."></input>
            <button type="submit" className="generalBtn">로그인</button>
          </form>

          <button className="generalBtn">회원 가입</button>
        </div>
      </div>
    </div>
  );
}