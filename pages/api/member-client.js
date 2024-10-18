import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    const client = await connectDB;
    const db = client.db("project")

    if (req.method == "GET") {
        let member = await db.collection('member').find().toArray()
        return res.status(200).json(shop)
    }

    if (req.method == "POST") {
        let errorMsg = ''
        if (req.body.id == '') {
            errorMsg = '아이디가 누락되었습니다.'
        }
        else if (req.body.pw == '') {
            errorMsg = '비밀번호가 누락되었습니다.'
        }
        else if (req.body.tel == '') {
            errorMsg = '전화번호가 누락되었습니다.'
        }
        else if (req.body.name == '') {
            errorMsg = '이름이 누락되었습니다.'
        }

        if (errorMsg != '') {
            return res.status(200).redirect(302, `/register/error?message=${encodeURIComponent(errorMsg)}`)
        }

        let newMember = {...req.body, shopTel:'', name:req.body.name}
        console.log("newMember", newMember)
        await db.collection('member').insertOne(newMember)

        return res.status(200).redirect(302, '/')
    }
}