import { connectDB } from "@/util/database";

export default async function Shop(req, res) {
    const client = await connectDB;
    const db = client.db("project")

    const method = req.body._method || req.method

    if (method == 'POST') {
        const shopData = await db.collection('shop').find().toArray()
        const maxNo = shopData.reduce((max, current) => {
            return current.no > max ? current.no : max;
        }, 0)

        console.log("maxNo", maxNo) //현재 DB에 있는 매장 정보들 중 가장 높은 no를 출력

        let newShop = {no: maxNo+1, name:req.body.name, tel: req.body.tel, address: req.body.address, seat: 0, state: "CLOSED", adminId: req.body.id}
        console.log(newShop)

        await db.collection('shop').insertOne(newShop)

        return res.status(200).redirect(302, '/')
    }
}