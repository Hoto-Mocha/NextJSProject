'use client'

import Legends from "./Legends";
import ShopDetail from "./ShopDetail";
import SeatBtn from "./SeatBtn";
import { useState } from "react";

export default function ShopPage({name, address, tel, seatArr, shopNo}) {
    const [selectedSeat, setSelectedSeat] = useState({no:-1, state:'', bookId:''});
    return (
        <div>
            <div className="titleBG">
                <h1 className="title">매장 상세 페이지</h1>
            </div>
            <div className="shopContainer">
                <div className="seatBox">
                    <div className="seatContainer">
                        {
                            seatArr.map((item, index) => {
                                return <SeatBtn item={item} setSelectedSeat={setSelectedSeat} key={index}/>
                            })
                        }
                    </div>
                    <div className="detailContainer">
                        <Legends />
                        <ShopDetail name={name} address={address} tel={tel}/>
                    </div>
                </div>
                <div className="bookBox">
                    <h3>좌석 정보</h3>
                    <p>좌석 번호: {selectedSeat.no == -1 ? '' : selectedSeat.no+1}</p>
                    <p>상태: {seatState(selectedSeat.state)}</p>
                    {bookable(selectedSeat.state) && <form action="/api/book" method="GET">
                        <input type='hidden' defaultValue={shopNo} name="shopNo"/>
                        <input type='hidden' defaultValue={selectedSeat.no} name="seatNo"/>
                        <button type="submit" style={{width:"100%", textAlign:'center', padding:0}}>예약하기</button>
                    </form>}
                </div>
            </div>
        </div>
    )
}

function seatState(state) {
    if (state == 'VACANT') {
        return '비어있음'
    }
    if (state == 'BOOKED') {
        return '예약'
    }
    if (state == 'OCCUPIED') {
        return '점유'
    }
}

function bookable(state) {
    if (state == 'VACANT') return true
    else return false
}