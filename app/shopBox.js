import Link from "next/link"

export default function ShopBox({ item }) {
    let url = '/shop/' + item.no
    return (
        <Link className="shopBox" href={url} >
            {/* <div className="shopImg">
                <p>매장 이미지</p>
            </div> */}
            {/* <div className="shopTextBlock" style={{marginLeft: '5px'}}> */}
            <div className="shopTextBlock">
            <p>매장 이름: {item.name}</p>
            <p>매장 주소: {item.address}</p>
            <p>매장 좌석 수: {item.seat.length}</p>
        </div>
        </Link >
    )
}