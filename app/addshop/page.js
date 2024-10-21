import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function AddShop() {

    const session = await getServerSession(authOptions);

    return (
        <div>
            <div className="titleBG">
                <h1 className="title">매장 추가 페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h1>매장 추가</h1>
                    <form className="registerForm" action="/api/shop" method="POST">
                        <input type="hidden" defaultValue={session.user.id} name="id"/>
                        <h3>매장 이름</h3>
                        <input className="registerInput" name="name" />
                        <h3>매장 전화번호</h3>
                        <input className="registerInput" name="tel" />
                        <h3>매장 주소</h3>
                        <input className="registerInput" name="address" />
                        <button className="generalBtn" type="submit">등록하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}