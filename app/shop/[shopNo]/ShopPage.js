'use client'

import Legends from "./Legends";
import ShopDetail from "./ShopDetail";
import SeatBtn from "./SeatBtn";
import { useState } from "react";

export default function ShopPage({name, address, tel, seatArr}) {
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
                    <p>상태: {selectedSeat.state}</p>
                    <button className="generalBtn" style={{width:"100%"}}>예약하기</button>
                </div>
            </div>
        </div>
    )
}