import { connectDB } from "@/util/database";

export default async function Detail(props) {

    const client = await connectDB;
    const db = client.db("project")
    let shop = await db.collection('shop').findOne({ no: parseInt(props.params.shopNo) })
    console.log(props.params.shopNo)
    console.log(shop)

    return (
        <div>
            <div className="titleBG">
                <h1 className="title">매장 상세 페이지</h1>
            </div>
            <div>
                <h2>매장 이름: {shop.name}</h2>
                <h2>매장 주소: {shop.address}</h2>
                <h2>매장 전화번호: {shop.tel}</h2>
            </div>
        </div>
    )
}