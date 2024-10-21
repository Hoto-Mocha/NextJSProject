import { connectDB } from "@/util/database";
import ShopPage from "./ShopPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Detail(props) {
    const session = await getServerSession(authOptions);

    const client = await connectDB;
    const db = client.db("project")
    let shop = await db.collection('shop').findOne({ no: parseInt(props.params.shopNo) })

    let seatArr = shop.seat ? [...shop.seat] : []
    seatArr.push({no:seatArr.length, state:'VACANT', bookId:''})
    seatArr.push({no:seatArr.length, state:'OCCUPIED', bookId:''})
    seatArr.push({no:seatArr.length, state:'VACANT', bookId:''})
    seatArr.push({no:seatArr.length, state:'BOOKED', bookId:''})
    seatArr.push({no:seatArr.length, state:'VACANT', bookId:''})
    seatArr.push({no:seatArr.length, state:'VACANT', bookId:''})
    seatArr.push({no:seatArr.length, state:'VACANT', bookId:''})
    seatArr.push({no:seatArr.length, state:'VACANT', bookId:''})

    return (
        <div>
            <ShopPage session={session} name={shop.name} address={shop.address} tel={shop.tel} seatArr={seatArr}/>
        </div>
    )
}