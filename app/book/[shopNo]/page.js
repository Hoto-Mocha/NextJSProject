import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import BookPageComponent from "./BookPageComponent";
import LoginBtn from "@/app/LoginBtn";

export default async function Book(props) {
    const session = await getServerSession(authOptions)

    return (
        <div>
            <div className="titleBG">
                <h1 className="title">예약 페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h3>예약</h3>
                    {!session && <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h3>로그인이 필요합니다.</h3>
                        <LoginBtn style={{marginLeft:0}}/>
                    </div>}
                    {session && <BookPageComponent props={props} bookId={session.user.id} />}
                </div>
            </div>

        </div>
    );
}
