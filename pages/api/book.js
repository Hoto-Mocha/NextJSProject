import { connectDB } from "@/util/database";

export default async function Book(req, res) {
    const client = await connectDB;
    const db = client.db("project")

    const method = req.body._method || req.method

    if (method == 'GET') {
        return res.status(200).redirect(302, `/book/${req.query.shopNo}?seat=${req.query.seatNo}`)
    }
    if (method == 'POST') {
        let newSeat = { no: parseInt(req.body.seatNo), state: "BOOKED", bookId: req.body.bookId }

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