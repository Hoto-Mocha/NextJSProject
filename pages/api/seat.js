import { connectDB } from "@/util/database";

export default async function Seat(req, res) {
    const client = await connectDB;
    const db = client.db("project")

    const method = req.body._method || req.method

    if (method == 'POST') {
        const shop = await db.collection('shop').findOne({no: parseInt(req.body.shopNo)})
        console.log("SERVER - seat.js >>> ", req.body.shopNo)
        console.log("SERVER - seat.js >>> ", shop)
        const maxNo = shop.seat.reduce((max, current) => {
            return current.no > max ? current.no : max;
        }, 0)
        let newSeat = { no: parseInt(maxNo+1), state: "VACANT", bookId: "" }

        await db.collection('shop').updateOne(
            { no: parseInt(req.body.shopNo) },
            { $push: { seat: newSeat } }  // MongoDB의 $push 연산자를 사용해 배열에 추가
        )

        return res.status(200).redirect(302, '/shop/' + req.body.shopNo)
    }

    if (method == 'PUT') {
        const newSeat = {no: parseInt(req.body.seatNo), state: req.body.state, bookId: req.body.bookId}

        await db.collection('shop').updateOne(
            { no: parseInt(req.body.shopNo), "seat.no": parseInt(req.body.seatNo) },
            {
                $set: {
                    "seat.$": newSeat  // 새로운 객체로 덮어씀
                }
            }
        )

        return res.status(200).redirect(302, '/shop/' + req.body.shopNo)
    }
}