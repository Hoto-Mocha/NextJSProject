import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "GET") {
        // const client = await connectDB;
        // const db = client.db("project")
        // let shop = await db.collection('shop').find().toArray()

        return res.status(200).json(shop)
    }

    if (req.method == "POST") {
        return res.status(200).json('처리완료')
    }
}