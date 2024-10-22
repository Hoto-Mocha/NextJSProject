import Link from "next/link";
import ShopBox from "./shopBox";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const client = await connectDB;
  
  const db = client.db("project")
  let shop = await db.collection('shop').find().toArray()
  return (
    <div>
      <div className="titleBG">
        {session ? <h1 className="title">반갑습니다. {session.user.name}님.</h1> : <h1 className="title">매장 좌석 확인 사이트</h1>}
      </div>
      <div className="divCenter">
        {session ? <LogoutBtn /> : <LoginBtn />}
        {!session && <Link className="generalBtn" href='/register' style={{ marginLeft: '10px' }}>회원 가입</Link>}
        {session && <Link className="generalBtn" href='/mypage' style={{ marginLeft: '10px' }}>마이페이지</Link>}
        {session && session.user.type === 'ADMIN' && <Link className="generalBtn" href='/addshop' style={{ marginLeft: '10px' }}>매장 등록</Link>}
      </div>
      <div className="shopBoxContainer">
        {
          shop.map((item, index) => {
            return (<ShopBox key={index} item={item}></ShopBox>)
          })
        }
      </div>
    </div>
  );
}
