'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BookPageComponent({ props, bookId }) {
    const searchParams = useSearchParams()
    const seatNo = searchParams.get('seat')
    const shopNo = props.params.shopNo

    console.log("BookPageComponent >>> shopNo", shopNo)
    console.log("BookPageComponent >>> seatNo", seatNo)
    return (
        <div>
            <h3>좌석을 예약하시겠습니까?</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <form action="/api/book" method="POST">
                    <input type="hidden" defaultValue={shopNo} name="shopNo" />
                    <input type="hidden" defaultValue={seatNo} name="seatNo" />
                    <input type="hidden" defaultValue={bookId} name="bookId" />
                    <button type="submit" className="generalBtn">예약하기</button>
                </form>
                <Link className="generalBtn" href={'/shop/' + shopNo}>취소하기</Link>
            </div>
        </div>
    )
}