import Link from "next/link"

export default function ShopBox({ item }) {
    let url = '/shop/'+item.no
    return (
        <Link className="shopBox" href={url} >
            <div className="shopImg">
                <p>매장 이미지</p>
            </div>
            <div className="shopTextBlock">
                <p>{item.name}</p>
                <p>{item.address}</p>
                <p>{item.seat.length}</p>
            </div>
        </Link>
    )
}