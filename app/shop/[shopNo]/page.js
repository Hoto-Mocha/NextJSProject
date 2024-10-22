import { connectDB } from "@/util/database";
import ShopPage from "./ShopPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";

export default async function Detail(props) {
    const session = await getServerSession(authOptions);

    const client = await connectDB;
    const db = client.db("project")
    let shop = await db.collection('shop').findOne({ no: parseInt(props.params.shopNo) })

    let seatArr = shop ? [...shop.seat] : []

    return (
        <>
            {shop ? <div>
                <ShopPage
                    name={shop.name}
                    address={shop.address}
                    tel={shop.tel}
                    seatArr={seatArr}
                    shopNo={shop.no}
                    isAdminLogined={isAdminLogined(session, shop)}
                    userId={session ? session.user.id : ''} />
            </div> : <>
            <div className="titleBG">
                <h1 className="title">매장 상세 페이지</h1>
            </div>
            <div className="loginContainer">
                <div className="registerBox">
                    <h3>매장 정보가 없습니다.</h3>
                    <Link className="generalBtn" href='/'>돌아가기</Link>
                </div>
            </div>
            </>}
        </>
    )
}

export function isAdminLogined(session, shop) {
    if (!session) return false
    return session.user.id === shop.adminId
}